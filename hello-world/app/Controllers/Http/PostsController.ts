import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public index = async ({ response, view }: HttpContextContract) => {
    const posts = [
      {
        id: 1,
        name: 'Tommy',
        status: false,
      },
      {
        id: 2,
        name: 'Matthew',
        status: true,
      },
      {
        id: 3,
        name: 'Harry',
        status: true,
      },
    ]
    const recipes = {
      steak: '10$',
      soup: '5$',
      drink: '3$',
    }
    const html = await view.render('index', { response, posts, recipes })
    return html
  }
}
