import CreatePostValidator from 'App/Validators/CreatePostValidator'

export default class ValidateController {
  public async store({ request }) {
    const post = await request.validate(CreatePostValidator)
    console.log(post.title)
    console.log(post.description)
  }
}
