/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import jwt from "../../http/requests/auth/jwt/index.js"


import router from '@/router/index.js'

export default {

    // updateUsername({ commit }, payload) {
    //     payload.user.updateProfile({
    //         displayName: payload.displayName
    //     }).then(() => {

    //         // If username update is success
    //         // update in localstorage
    //         let newUserData = Object.assign({}, payload.user.providerData[0])
    //         newUserData.displayName = payload.displayName
    //         commit('UPDATE_USER_INFO', newUserData, { root: true })

    //         // If reload is required to get fresh data after update
    //         // Reload current page
    //         if (payload.isReloadRequired) {
    //             router.push(router.currentRoute.query.to || '/')
    //         }
    //     }).catch((err) => {
    //         payload.notify({
    //             time: 8800,
    //             title: 'Error',
    //             text: err.message,
    //             iconPack: 'feather',
    //             icon: 'icon-alert-circle',
    //             color: 'danger'
    //         })
    //     })
    // },


    // JWT
    loginJWT({ commit }, payload) {

        return new Promise((resolve, reject) => {
            jwt.login(payload.userDetails.email, payload.userDetails.password)
                .then(response => {

                    // If there's user data in response

                    if (response.data.data) {
                        // Navigate User to homepage
                        router.push(router.currentRoute.query.to || '/')

                        // Set accessToken
                        localStorage.setItem("accessToken", response.data.data.token.token)

                        // Update user details
                        commit('UPDATE_USER_INFO', response.data.data.user[0], { root: true })
                            // console.log(localStorage.getItem("userInfo"))
                            // Set bearer token in axios
                        commit("SET_BEARER", response.data.data.token.token)

                        resolve(response)
                    } else {
                        // console.log(response.data[0])
                        reject({ message: "Wrong Email or Password" })
                    }

                })
                .catch(error => { reject(error) })
        })
    },

    registerUserJWT({ commit }, payload) {

        const { displayName, email, password, confirmPassword } = payload.userDetails

        return new Promise((resolve, reject) => {

            // Check confirm password
            if (password !== confirmPassword) {
                reject({ message: "Password doesn't match. Please try again." })
            }

            jwt.registerUser(displayName, email, password)
                .then(response => {
                    // Redirect User
                    router.push(router.currentRoute.query.to || '/')

                    // Update data in localStorage
                    localStorage.setItem("accessToken", response.data.accessToken)
                    commit('UPDATE_USER_INFO', response.data.userData, { root: true })

                    resolve(response)
                })
                .catch(error => { reject(error) })
        })
    },

    fetchAccessToken() {
        return new Promise((resolve) => {
            jwt.refreshToken().then(response => { resolve(response) })
        })
    }
}