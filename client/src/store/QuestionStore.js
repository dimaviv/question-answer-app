import {makeAutoObservable} from "mobx";

export default class QuestionStore {
    constructor() {
        this._categories = []
        this._answers = []
        this._questions = []
        this._selectedCategory = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 5
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }

    setAnswers(answers) {
        this._answers = answers
    }

    setQuestions(questions) {
        this._questions = questions
    }

    setSelectedCategory(category) {
        this.setPage(1)
        this._selectedCategory = category
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setLimit(limit) {
        this._limit = limit
    }

    get categories() {
        return this._categories
    }

    get answers() {
        return this._answers
    }

    get questions() {
        return this._questions
    }

    get selectedCategory() {
        return this._selectedCategory
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}