import Mail from '@ioc:Adonis/Addons/Mail'

export default class VerifyController {
  public async verify({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Test Verify')
        .htmlView('email/verify', { user: 'Test' })
    })
    return view.render('home')
  }

  public async template({ view }) {
    // await Mail.send((message) => {
    //   message
    //     .from('thanatat.s@etrangroup.com')
    //     .to('thanatat.sr@gmail.com')
    //     .subject('Test Template')
    //     .htmlView('email/template')
    // })
    return view.render('email/template')
  }
}
