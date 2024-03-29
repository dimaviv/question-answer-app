const {Category} = require('../models/models')
const ApiError = require("../error/ApiError");
const {validationResult} = require("express-validator");

class CategoryController {
    async create(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest('Validation error', errors.array()));
        }

        const {name} = req.body
        const category = await Category.create({name})
            .catch(err => next(ApiError.badRequest(err.message)))

        return res.json(category)
    }

    async getAll(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest('Validation error', errors.array()));
        }

        const categories = await Category.findAll({order: [['id', 'ASC']]})
            .catch(err => next(ApiError.badRequest(err.message)))

        return res.json(categories)
    }

    async update(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest('Validation error', errors.array()));
        }

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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest('Validation error', errors.array()));
        }

        const {id} = req.params

        const category = await Category.destroy({where: {id}})
            .catch(err => next(ApiError.badRequest(err.message)))

        if (!category) return next(ApiError.notFound('Category not found'))
        return res.json(category)
    }
}

module.exports = new CategoryController()