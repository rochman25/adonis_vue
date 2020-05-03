// import Vue from 'vue'
// import App from './App.vue'

// // Globally Registered Components
// import './globalComponents.js'

// import './assets/scss/main.scss'

// import '@/assets/css/main.css'

// import router from './router'
// // Vuesax Component Framework
// import Vuesax from 'vuesax'
// import 'material-icons/iconfont/material-icons.css' //Material Icons
// import 'vuesax/dist/vuesax.css'; // Vuesax
// Vue.use(Vuesax)


// // Feather font icon
// require('./assets/css/iconfont.css')

// Vue.config.productionTip = false

// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')

/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)


// axios
import axios from "./axios.js"
Vue.prototype.$http = axios

// API Calls
import "./http/requests"

// mock
import "./fake-db/index.js"

// Theme Configurations
import './../../../themeConfig.js'

// Firebase
// import './firebase/firebaseConfig.js'

// Auth0 Plugin
import AuthPlugin from "./plugins/auth.js";
Vue.use(AuthPlugin);

// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font ico
require('./assets/css/iconfont.css')


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')