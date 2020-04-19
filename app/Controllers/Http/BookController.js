'use strict'

const Base = use('App/Controllers/Http/BaseController')
const Book = use('App/Models/Book')

class BookController extends Base {

    async index({ response, request }) {
        // try {
        let isbn = request.input('isbn');
        let page = (request.input('page')) ? request.input('page') : 1;
        let respon = {};
        if (isbn) {
            let book = await Book.where('primary_isbn13', isbn).fetch();
            if (book) {
                respon = {
                    message: this.dataFound,
                    data: book
                }
                return response.json(this.successResponse(respon));
            }
            respon = {
                message: this.dataNotFound,
                data: user
            }
            return response.json(this.successResponse(respon));
        }
        let book = await Book.query().paginate(page, 10);
        if (book) {
            respon = {
                message: this.dataFound,
                data: book
            }
            return response.json(this.successResponse(respon));
        }
        respon = {
            message: this.dataNotFound,
            data: user
        }
        return response.json(this.successResponse(respon));
        // } catch (error) {
        //     let respon = {
        //         message: this.errorMessage,
        //         error: error
        //     }
        //     return response.json([this.errorResponse(respon)]);
        // }
    }

}

module.exports = BookController