import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Token from 'App/Models/Token';

export default class TokensController {
  public async index({ request, response }: HttpContextContract) {
    const { search } = request.qs();
    try {
      if (search) {
        return response.json(await this.search({ search }));
      }

      const tokens = await Token.all();

      return response.json(tokens);
    } catch (error) {
      return response.json({ error: error.message });
    }
  }

  public async search({ search }) {
    const token = await Token.query()
      .where('symbol', 'ILIKE', `%${search}%`)
      .orWhere('alternative_symbol', 'ILIKE', `%${search}%`)
      .orWhere('name', 'ILIKE', `%${search}%`);

    return token;
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
