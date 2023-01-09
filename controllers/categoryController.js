const {Category} = require('../models/models')

class CategoryController {
    async create(req, res) {
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    }

    async getAll(req, res) {
        const categories = await Category.findAll()
        return res.json(categories)
    }

    async delete(req, res) {
        const {id} = req.params

        const category = await Category.destroy({where: {id}})
        if (category) {
            return res.json("Deleted successfully!")
        } else {
            return res.json("Deletion error!")
        }
    }

    async update(req, res) {
        const {id, name, avatar} = req.params

        const category = await Category.update(
            {
                name,
                avatar
            },
            {
                where: {id: id}
            }
        );
        if (category) {
            return res.json(category)
        } else {
            return res.json("Updating error!")
        }
    }
}

module.exports = new CategoryController()