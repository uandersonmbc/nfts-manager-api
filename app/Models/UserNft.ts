import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Nft from './Nft';

export default class UserNft extends BaseModel {
  public static table = 'users_nfts';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public account_address: string;

  @column()
  public nft_id: number;

  @column()
  public user_id: number;

  @column()
  public data: object;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Nft, { foreignKey: 'nft_id' })
  public nft: BelongsTo<typeof Nft>;
}
