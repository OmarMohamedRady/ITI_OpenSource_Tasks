/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '../../common/abstract.models';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  readonly email: string;
}
