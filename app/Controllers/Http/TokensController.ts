import { Response } from '@adonisjs/http-server/build/standalone';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Token from 'App/Models/Token';

export default class TokensController {
  public async index({ request, response }: HttpContextContract) {
    const tokens = await Token.all();
    return response.json(tokens);
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['token', 'name', 'symbol', 'alternative_symbol']);
    try {
      const existingToken = await Token.findBy('token', data.token);
      if (existingToken) {
        return response.status(400).json({
          error: 'Token already exists',
        });
      }

      const token = await Token.create(data);
      return response.status(201).json(token);
    } catch (error) {
      return response.status(400).send(error);
    }
  }
}
