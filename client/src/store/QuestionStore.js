import {makeAutoObservable} from "mobx";

export default class QuestionStore {
    constructor() {
        this._categories = []
        this._answers = []
        this._questions = []
        this._selectedCategory = {}
        makeAutoObservable(this)
    }

    setCategories(categories){
        this._categories = categories
    }
    setAnswers(answers){
        this._answers = answers
    }
    setQuestions(questions){
        this._questions = questions
    }
    setSelectedCategory(category){
        this._selectedCategory = category
    }

    get categories(){
        return this._categories
    }
    get answers(){
        return this._answers
    }
    get questions(){
        return this._questions
    }
}