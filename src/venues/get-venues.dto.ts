import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { CanBeUndefined } from '../utils/can-be-undefined';

export class GetVenuesDto {
  @IsNumber()
  @Type(() => Number)
  @CanBeUndefined()
  priceInEuroMin?: number;
  @IsNumber()
  @Type(() => Number)
  @CanBeUndefined()
  priceInEuroMax?: number;
}
