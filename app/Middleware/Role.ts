import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class Role {
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>, role: string[]) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    // const user = auth.user;
    // user?.load('role');
    // if (!user || role.indexOf('admina') === -1) {
    //   throw new Error('You are not authorized to perform this action');
    // }
    // console.log(user);
    await next();
  }
}
