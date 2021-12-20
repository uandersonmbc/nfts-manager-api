import { DateTime } from 'luxon';
import Token from './Token';
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm';

export default class Nft extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public slug: string;

  @column()
  public link: string;

  @column()
  public configs: object;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @manyToMany(() => Token, { pivotTable: 'tokens_nfts' })
  public tokens: ManyToMany<typeof Token>;
}
