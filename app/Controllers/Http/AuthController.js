'use strict'
const User = use('App/Models/User')
const Base = use('App/Controllers/Http/BaseController')

class AuthController extends Base {

    async index({ response }) {
        return response.json(this.successResponse());
    }

    async login_action({ request, response, auth }) {
        try {
            let email = request.input('email');
            let password = request.input('password');
            let user = await User.where('email', email).fetch();
            let respon = {};
            if (user) {
                let token = await auth.attempt(email, password);
                respon = {
                    message: this.loginSuccessMessage,
                    data: {
                        user: user,
                        token: token
                    }
                }
                return response.json(this.successResponse(respon));
            }
            respon = {
                message: this.dataNotFound,
                data: user
            }
            return response.json(this.successResponse(respon));
        } catch (error) {
            let respon = {
                message: this.errorMessage,
                error: error
            }
            return response.json([this.errorResponse(respon)]);
        }
    }


}

module.exports = AuthController