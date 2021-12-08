import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Nft from 'App/Models/Nft';

export default class NftsController {
  public async index({ response, auth }: HttpContextContract) {
    const nfts = await Nft.query().preload('tokens');
    return response.json(nfts);
  }

  public async update({ params, request, response }: HttpContextContract) {
    const nft = await Nft.findOrFail(params.id);
    const data = request.only(['link', 'configs', 'tokens']);
    nft.merge(data);

    await nft.save();

    await nft.related('tokens').sync(data.tokens);

    await nft.load('tokens');
    return response.json(nft);
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['link', 'configs', 'tokens']);
    const nft = await Nft.create(data);

    await nft.related('tokens').attach(data.tokens);

    await nft.load('tokens');

    return response.json(nft);
  }
}
