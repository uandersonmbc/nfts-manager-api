import Token from 'App/Models/Token';

export default class TokensController {
  public async index() {
    const tokens = await Token.all();
    return tokens;
  }
}
