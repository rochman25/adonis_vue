'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('app')
Route.get("hello", 'AuthController.index').prefix("api/v1");
Route.post('/login', 'AuthController.login_action').prefix('api/v1');


Route.group(function() {
    Route.get("/books", 'BookController.index').middleware('auth');
}).prefix("api/v1")


Route.any("*", ({ view }) => view.render('app'))