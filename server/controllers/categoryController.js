const {Category} = require('../models/models')
const ApiError = require("../error/ApiError");

class CategoryController {
    async create(req, res, next) {
        const {name} = req.body
        const category = await Category.create({name})
            .catch(err => next(ApiError.badRequest(err.message)))

        return res.json(category)
    }

    async getAll(req, res, next) {
        const categories = await Category.findAll({order: [['id', 'ASC']]})
            .catch(err => next(ApiError.badRequest(err.message)))

        return res.json(categories)
    }

    async update(req, res, next) {
        const {id, name, avatar} = req.params

        const category = await Category.update(
            {
                name,
                avatar
            },
            {
                where: {id: id}
            }
        )
            .catch(err => next(ApiError.badRequest(err.message)))

        if (!category) return next(ApiError.notFound('Category not found'))
        return res.json(category)
    }

    async delete(req, res, next) {
        const {id} = req.params

        const category = await Category.destroy({where: {id}})
            .catch(err => next(ApiError.badRequest(err.message)))

        if (!category) return next(ApiError.notFound('Category not found'))
        return res.json(category)
    }
}

module.exports = new CategoryController()