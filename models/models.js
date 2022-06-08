const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    login: {type: DataTypes.STRING, unique:true},
    email: {type: DataTypes.STRING, unique:true},
    password:{type:DataTypes.STRING},
    role:{type: DataTypes.STRING, defaultValue:"USER"},
    balance: {type: DataTypes.DECIMAL, defaultValue:0},
    avatar: {type: DataTypes.STRING},
    score: {type: DataTypes.INTEGER, defaultValue:0},
})

const Question = sequelize.define('question',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    text: {type: DataTypes.STRING, unique:true},
    isAnswered: {type: DataTypes.BOOLEAN, defaultValue:false},
})

const Answer = sequelize.define('answer',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    text: {type: DataTypes.TEXT},
    //likes: {type: DataTypes.INTEGER, defaultValue:0},
    //likes: {type: DataTypes.INTEGER},
    rating: {type: DataTypes.INTEGER, defaultValue:0},
    isBest: {type: DataTypes.BOOLEAN, defaultValue:false},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    image:{type: DataTypes.STRING},
})

const Rate = sequelize.define('rate', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.STRING, allowNull: false},
})

const File = sequelize.define('file', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    extension: {type: DataTypes.STRING, allowNull: false},
})

User.hasMany(Question)
Question.belongsTo(User)

User.hasMany(Answer)
Answer.belongsTo(User)

User.hasMany(Rate)
Rate.belongsTo(User)

Category.hasMany(Question)
Question.belongsTo(Category)

// Answer.hasMany(Rating)
// Rating.belongsTo(Answer)

Question.hasMany(Answer)
Answer.belongsTo(Question)


//File
Question.hasMany(File ,{as:'files'})
File.belongsTo(Question)

Answer.hasMany(File,{as:'files'})
File.belongsTo(Answer)


module.exports = {
    User,
    Question,
    Answer,
    Category,
    Rate,
    File
}