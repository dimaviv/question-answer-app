const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nickname: {type: DataTypes.STRING, unique: true, maxLength: 40, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    balance: {type: DataTypes.DECIMAL, defaultValue: 0},
    avatar: {type: DataTypes.TEXT},
    score: {type: DataTypes.INTEGER, defaultValue: 0},
    createdAt: new Date(),
    updatedAt: new Date(),
    provider: {type: DataTypes.STRING, defaultValue: null},
    nicknameUpdatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    activationLink: {type: DataTypes.STRING},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
})

User.beforeUpdate(async (user, options) => {
    if (user.changed('nickname')) {
        user.nicknameUpdatedAt = new Date();
    }
});

const Question = sequelize.define('question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING},
    isAnswered: {type: DataTypes.BOOLEAN, defaultValue: false},
})

const Answer = sequelize.define('answer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.TEXT},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    isBest: {type: DataTypes.BOOLEAN, defaultValue: false},
})

const Comment = sequelize.define('comments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.TEXT, allowNull: false}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    image: {type: DataTypes.STRING},
})

const Vote = sequelize.define('votes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    vote: {type: DataTypes.SMALLINT, allowNull: false, validate: {isIn: [[1, -1]],}},
})

const File = sequelize.define('file', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    extension: {type: DataTypes.STRING, allowNull: false},
})


// Category
Category.hasMany(Question)
Question.belongsTo(Category)

// User
User.hasMany(Question)
Question.belongsTo(User)

User.hasMany(Answer)
Answer.belongsTo(User)

// Votes
User.hasMany(Vote)
Vote.belongsTo(User)

Answer.hasMany(Vote, {as: 'votes'})
Vote.belongsTo(Answer)

Question.hasMany(Vote, {as: 'votes'})
Vote.belongsTo(Question)

Question.hasMany(Answer)
Answer.belongsTo(Question)

// Comments
Question.hasMany(Comment, {as: 'comments'})
Comment.belongsTo(Question)

Answer.hasMany(Comment, {as: 'comments'})
Comment.belongsTo(Answer)

User.hasMany(Comment, {as: 'comments'})
Comment.belongsTo(User)

// File
Question.hasMany(File, {as: 'files'})
File.belongsTo(Question)

Answer.hasMany(File, {as: 'files'})
File.belongsTo(Answer)


module.exports = {
    User,
    Question,
    Answer,
    Category,
    Vote,
    File,
    Comment
}