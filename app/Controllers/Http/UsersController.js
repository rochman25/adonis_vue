'use strict'

const Base = use('App/Controllers/Http/BaseController')
const User = use('App/Models/User')

class UsersController extends Base {

    async index({ response, request }) {
        let username = request.input('username');
        let page = (request.input('page')) ? request.input('page') : 1;
        let respon = {};
        if (username) {
            let book = await User.where('username', username).fetch();
            if (book) {
                respon = {
                    message: this.dataFound,
                    data: book
                }
                return response.json(this.successResponse(respon));
            }
            respon = {
                message: this.dataNotFound,
                data: book
            }
            return response.json(this.successResponse(respon));
        }
        let book = await User.query().paginate(page, 10);
        if (book) {
            respon = {
                message: this.dataFound,
                data: book
            }
            return response.json(this.successResponse(respon));
        }
        respon = {
            message: this.dataNotFound,
            data: book
        }
        return response.json(this.successResponse(respon));
    }
}


module.exports = UsersController