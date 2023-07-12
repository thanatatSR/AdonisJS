import Mail from '@ioc:Adonis/Addons/Mail'

export default class TemplateController {

  public async template({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Checking Email')
        .htmlView('email/renewMember')
    })
    return view.render('email/renewMember')
  }

  public async verify({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Checking Email')
        .htmlView('email/renewMember')
    })
    return view.render('email/verify')
  }

  public async otp({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Checking Email')
        .htmlView('email/otp')
    })
    return view.render('email/otp')
  }

  public async newLogin({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Checking Email')
        .htmlView('email/newLogin')
    })
    return view.render('email/newLogin')
  }

  public async failAttempt({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Checking Email')
        .htmlView('email/failAttempt')
    })
    return view.render('email/failAttempt')
  }

  public async rate({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Checking Email')
        .htmlView('email/rate')
    })
    return view.render('email/rate')
  }

  public async bookingCancel1({ view }) {
    // await Mail.send((message) => {
    //   message
    //     .from('thanatat.s@etrangroup.com')
    //     .to('thanatat.sr@gmail.com')
    //     .subject('Checking Email')
    //     .htmlView('email/bookingCancel1')
    // })
    return view.render('email/bookingCancel1')
  }

  public async bookingCancel2({ view }) {
    // await Mail.send((message) => {
    //   message
    //     .from('thanatat.s@etrangroup.com')
    //     .to('thanatat.sr@gmail.com')
    //     .subject('Checking Email')
    //     .htmlView('email/bookingCancel2')
    // })
    return view.render('email/bookingCancel2')
  }

  public async bookingCancel3({ view }) {
    // await Mail.send((message) => {
    //   message
    //     .from('thanatat.s@etrangroup.com')
    //     .to('thanatat.sr@gmail.com')
    //     .subject('Checking Email')
    //     .htmlView('email/bookingCancel3')
    // })
    return view.render('email/bookingCancel3')
  }

  public async invite({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Checking Email')
        .htmlView('email/invite')
    })
    return view.render('email/invite')
  }

  public async bookingConfirm1({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Checking Email')
        .htmlView('email/bookingConfirm1')
    })
    return view.render('email/bookingConfirm1')
  }

  public async bookingConfirm2({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Checking Email')
        .htmlView('email/bookingConfirm2')
    })
    return view.render('email/bookingConfirm2')
  }

  public async bookingConfirm3({ view }) {
    await Mail.send((message) => {
      message
        .from('thanatat.s@etrangroup.com')
        .to('thanatat.sr@gmail.com')
        .subject('Checking Email')
        .htmlView('email/bookingConfirm3')
    })
    return view.render('email/bookingConfirm3')
  }
}
