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
import View from '@ioc:Adonis/Core/View'
Route.where('id', Route.matchers.number())

Route.get('/', async ({ view }) => {
  return view.render('welcome', {
    greeting: 'Hello',
    getUser: (name: string) => {
      return name
    },
  })
})

Route.get('/home', async ({ view }) => {
  return view.render('home')
})

Route.get('/log', async ({ request, response }) => {
  console.log(request.url())
  console.log(request.all())
  response.send('hello world')
  response.send({ hello: 'world' })
})

Route.get('/email/verify', 'VerifyController.verify')

Route.get('/email/template', 'VerifyController.template')

Route.get('/validate', 'ValidateController.store')

Route.get('/posts', 'PostsController.index')

Route.get('/posts/:id?', ({ params, request }) => {
  console.log(request.all())
  const { id } = params
  return 'Post with id ' + id
})

View.registerTemplate('uikit/button', {
  template: `
    <button {{ $props.serializeExcept(['title']) }}>
      {{ title }}
    </button>
  `,
})
