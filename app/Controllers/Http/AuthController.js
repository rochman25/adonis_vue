'use strict'
const User = use('App/Models/User')
const Base = use('App/Controllers/Http/BaseController')

class AuthController extends Base {

    async index({ response }) {
        return response.json(this.successResponse());
    }

    async login_action({ request, response, auth }) {

    }


}

module.exports = AuthController