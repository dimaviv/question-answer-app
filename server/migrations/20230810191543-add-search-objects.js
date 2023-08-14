'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(async (transaction) => {
            // Add the text_search_vector column
            await queryInterface.addColumn('questions', 'text_search_vector', {
                type: Sequelize.TSVECTOR,
            }, {transaction});

            // Populate the text_search_vector column
            await queryInterface.sequelize.query(`
        UPDATE questions
        SET text_search_vector = to_tsvector('english', text)
      `, {transaction});

            // Create index on text_search_vector
            await queryInterface.sequelize.query(`
        CREATE INDEX idx_questions_text_search
        ON questions
        USING GIN(text_search_vector)
      `, {transaction});

            // Create the update_text_search_vector function
            await queryInterface.sequelize.query(`
        CREATE OR REPLACE FUNCTION update_text_search_vector()
        RETURNS TRIGGER AS $$
        BEGIN
            IF NEW.text ~ '[\u0400-\u04FF\u0500-\u052F\u2DE0-\u2DFF\uA640-\uA69F]' THEN
                NEW.text_search_vector = to_tsvector('russian', NEW.text);
            ELSE
                NEW.text_search_vector = to_tsvector('english', NEW.text);
            END IF;
            
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
      `, {transaction});

            // Create the insert trigger
            await queryInterface.sequelize.query(`
        CREATE TRIGGER questions_insert_trigger
        BEFORE INSERT ON questions
        FOR EACH ROW
        EXECUTE FUNCTION update_text_search_vector();
      `, {transaction});

            // Create the update trigger
            await queryInterface.sequelize.query(`
        CREATE TRIGGER questions_update_trigger
        BEFORE UPDATE ON questions
        FOR EACH ROW
        WHEN (OLD.text IS DISTINCT FROM NEW.text)
        EXECUTE FUNCTION update_text_search_vector();
      `, {transaction});
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(async (transaction) => {
            // Drop the update trigger
            await queryInterface.sequelize.query(`
        DROP TRIGGER IF EXISTS questions_update_trigger ON questions
      `, {transaction});

            // Drop the insert trigger
            await queryInterface.sequelize.query(`
        DROP TRIGGER IF EXISTS questions_insert_trigger ON questions
      `, {transaction});

            // Drop the update_text_search_vector function
            await queryInterface.sequelize.query(`
        DROP FUNCTION IF EXISTS update_text_search_vector()
      `, {transaction});

            // Drop the index
            await queryInterface.sequelize.query(`
        DROP INDEX IF EXISTS idx_questions_text_search
      `, {transaction});

            // Remove the text_search_vector column
            await queryInterface.removeColumn('questions', 'text_search_vector', {transaction});
        });
    }
};
