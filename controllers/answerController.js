const uuid = require('uuid')
const path = require('path')
const {Answer, File} = require('../models/models')
const ApiError = require('../error/ApiError')

class AnswerController{
    async create(req, res, next) {
        try {
            let {text, userId, questionId} = req.body
            let answer = await Answer.create({text, userId, questionId});

            if (req.files) {
                let {file} = req.files
                let extension;

                if (!file.length){
                    extension = file.name.slice((file.name.lastIndexOf(".") - 1 >>> 0) + 2);
                    let fileName = uuid.v4() + '.' + extension

                    file.mv(path.resolve(__dirname, '..', 'static', fileName))

                    File.create({
                        name: fileName,
                        extension: extension,
                        answerId: answer.id
                    })

                }else {
                    file.forEach(f => {
                        extension = f.name.slice((f.name.lastIndexOf(".") - 1 >>> 0) + 2);
                        let fileName = uuid.v4() + '.' + extension

                        f.mv(path.resolve(__dirname, '..', 'static', fileName))

                        File.create({
                            name: fileName,
                            extension: extension,
                            answerId: answer.id
                        })
                    })
                }
            }

            return res.json(answer)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res){

        let answers = await Answer.findAndCountAll( {
            include: [{model:File, as: 'files'}]
        },)

        return res.json(answers)
    }
    async delete(req, res){
        const {id} = req.params

        const answer = await Answer.destroy({where: {id}})
        if (answer){
            return res.json("Deleted successfully!")
        }else { return res.json("Deletion error!")}
    }

}

module.exports = new AnswerController()