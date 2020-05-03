// resources / assets / js / router / index.js

import Vue from "vue";
import Router from "vue-router";
import auth from "../auth/authService.js";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        //
        {
            path: '',
            component: () =>
                import ("./../layouts/Main.vue"),
            children: [
                //
                {
                    path: "/",
                    name: "dashboard",
                    component: () =>
                        import ("./../views/pages/Dashboard.vue"),
                    meta: {
                        breadcrumb: [
                            { title: 'Dashboard', url: '/' },
                            { title: 'Dashboard', active: true },
                        ],
                        pageTitle: 'Dashboard',
                        authRequired: true
                    },
                },
                {
                    path: "/books",
                    name: "books",
                    component: () =>
                        import ("./../views/pages/Books.vue"),
                    meta: {
                        breadcrumb: [
                            { title: 'Books', url: '/books' },
                            { title: 'Books', active: true },
                        ],
                        pageTitle: 'Books',
                        authRequired: true
                    },
                },
                {
                    path: "/users",
                    name: "users",
                    component: () =>
                        import ("./../views/pages/Users.vue"),
                    meta: {
                        breadcrumb: [
                            { title: 'Users', url: '/users' },
                            { title: 'Users', active: true },
                        ],
                        pageTitle: 'Users',
                        authRequired: true
                    },
                },
            ]
        },
        {
            path: "",
            component: () =>
                import ("./../layouts/FullPage.vue"),
            children: [
                //
                {
                    path: "/login",
                    name: "page-login",
                    component: () =>
                        import ("./../views/pages/Login.vue")
                },
                {
                    path: '/error-404',
                    name: 'page-error-404',
                    component: () =>
                        import ('./../views/pages/Error404.vue'),

                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/error-404'
        }
    ]
});
// router.afterEach(() => {
//     // Remove initial loading
//     const appLoading = document.getElementById('loading-bg')
//     if (appLoading) {
//         appLoading.style.display = "none";
//     }
// })
router.beforeEach((to, from, next) => {
    // firebase.auth().onAuthStateChanged(() => {

    // get firebase current user
    // const firebaseCurrentUser = firebase.auth().currentUser

    // if (
    //     to.path === "/pages/login" ||
    //     to.path === "/pages/forgot-password" ||
    //     to.path === "/pages/error-404" ||
    //     to.path === "/pages/error-500" ||
    //     to.path === "/pages/register" ||
    //     to.path === "/callback" ||
    //     to.path === "/pages/comingsoon" ||
    //     (auth.isAuthenticated() || firebaseCurrentUser)
    // ) {
    //     return next();
    // }

    // If auth required, check login. If login fails redirect to login page
    if (to.meta.authRequired) {
        // if (!this.$store.state.auth.isUserLoggedIn()) {
        //     router.push({ path: '/login', query: { to: to.path } })
        // }
        if (!auth.isAuthenticated()) {
            console.log(auth.isAuthenticated())
            router.push({ path: '/login', query: { to: to.path } })
        }
        // console.log(to.meta.authRequired);
    }

    return next()
        // Specify the current path as the customState parameter, meaning it
        // will be returned to the application after auth
        // auth.login({ target: to.path });

    // });

});

export default router