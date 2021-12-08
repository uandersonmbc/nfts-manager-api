import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class InvestmentsController {
  public async index({ auth, response }: HttpContextContract) {
    const user = auth.user;
    return response.json(user);
  }

  public async store({ request, response }: HttpContextContract) {
    return response.json({});
  }
}
