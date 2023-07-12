/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/email/template', 'TemplateController.template')

Route.get('/email/verify', 'TemplateController.verify')

Route.get('/email/otp', 'TemplateController.otp')

Route.get('/email/newLogin', 'TemplateController.newLogin')

Route.get('/email/failAttempt', 'TemplateController.failAttempt')

Route.get('/email/rate', 'TemplateController.rate')

Route.get('/email/bookingCancel1', 'TemplateController.bookingCancel1')

Route.get('/email/bookingCancel2', 'TemplateController.bookingCancel2')

Route.get('/email/bookingCancel3', 'TemplateController.bookingCancel3')

Route.get('/email/invite', 'TemplateController.invite')

Route.get('/email/bookingConfirm1', 'TemplateController.bookingConfirm1')

Route.get('/email/bookingConfirm2', 'TemplateController.bookingConfirm2')

Route.get('/email/bookingConfirm3', 'TemplateController.bookingConfirm3')

