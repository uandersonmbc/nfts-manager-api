import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

import UserNft from 'App/Models/UserNft';

export default class NftUsersController {
  public async index({ request, response, auth }: HttpContextContract) {
    const user = auth.user;

    if (!user) {
      return response.status(401).json({
        error: 'Unauthorized',
      });
    }

    try {
      const { nft_id } = request.qs();

      const data_nft = await UserNft.query()
        .where('user_id', '=', user.id)
        .where('nft_id', '=', nft_id);

      return response.json(data_nft);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const schameNFT = schema.create({
      name: schema.string({ trim: true }, [rules.maxLength(255), rules.required()]),
      account_address: schema.string({ trim: true }, [
        rules.maxLength(255),
        rules.required(),
        rules.unique({ table: 'user_nfts', column: 'account_address' }),
      ]),
      nft_id: schema.number([rules.required()]),
      data: schema.object().anyMembers(),
    });

    const user = auth.user;

    try {
      if (!user) {
        return response.status(401).json({
          error: 'Unauthorized',
        });
      }

      const { name, account_address, nft_id, data } = await request.validate({
        schema: schameNFT,
      });

      const dataCreate = {
        name,
        account_address,
        data,
        nft_id: nft_id,
        user_id: user.id,
      };

      const userNft = await UserNft.create(dataCreate);

      return response.json(userNft);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}
