'use strict'

class BaseController {

    constructor() {
        this.welcomeMessage = "Hai from API Book_IO";

        this.errorMessage = "Something not right";

        this.validationMessage = "Validation Error.";

        this.addSuccessMessage = "Insert data succes.";
        this.updateSuccessMessage = "Update data success.";

        this.dataFound = "Data Found.";
        this.dataNotFound = "Data Not Found.";
        this.emailNotFound = "Email Not Found.";

        this.loginSuccessMessage = "Login success.";
        this.loginFailedMessage = "Sorry you can't login with this account.";

        this.registerSuccessMessage = "Register Success.";
    }


    successResponse(respon = "") {
        let message = (typeof respon.message != "undefined") ? respon.message : this.welcomeMessage;
        let statusCode = 200;
        let data = (typeof respon.data != "undefined") ? respon.data : [];
        return {
            code: statusCode,
            message: message,
            data: data
        };
    }

    errorResponse(respon = "") {
        let message = (typeof respon.message != "undefined") ? respon.message : this.errorMessage;
        let statusCode = 401;
        let data = (typeof respon.error != "undefined") ? respon.error : [];
        return {
            code: statusCode,
            message: message,
            error: data
        };
    }


}

module.exports = BaseController