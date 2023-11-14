import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { CanBeUndefined } from '../utils/can-be-undefined';

export class UpdateVenueDto {
  @IsString()
  @CanBeUndefined()
  name?: string;
  @IsString()
  @CanBeUndefined()
  postalCode?: string;
  @IsString()
  @CanBeUndefined()
  cityName?: string;
  @IsNumber()
  @CanBeUndefined()
  latitude?: number;
  @IsNumber()
  @CanBeUndefined()
  longitude?: number;
  @IsNumber()
  @CanBeUndefined()
  pricePerNightInEUR?: number;
  @IsNumber()
  @CanBeUndefined()
  rating?: number;
  @IsNumber()
  @CanBeUndefined()
  numberOfReviews?: number;
  @IsNumber()
  @CanBeUndefined()
  capacity?: number;
  @IsNumber()
  @CanBeUndefined()
  amountOfBeds?: number;
  @IsString()
  @CanBeUndefined()
  description?: string;
  @IsString()
  @CanBeUndefined()
  checkInHour?: string;
  @IsString()
  @CanBeUndefined()
  checkOutHour?: string;
  @IsNumber()
  @CanBeUndefined()
  metersFromCityCenter?: number;
  @IsString()
  @CanBeUndefined()
  phone?: string;
  @IsString()
  @CanBeUndefined()
  email?: string;
  @IsBoolean()
  @CanBeUndefined()
  fireplace?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  speakers?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  wiFi?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  restaurantInHouse?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  bar?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  pool?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  jacuzzi?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  garden?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  fitnessCenter?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  reception24H?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  karaoke?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  outdoorMusic?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  indoorMusic?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  library?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  petFriendly?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  parking?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  playground?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  kitchen?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  bathroom?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  hypoallergenicBedding?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  tv?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  safe?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  wheelchairFriendly?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  shortGrownFriendly?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  blindFriendly?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  deafFriendly?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  lakeNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  forestNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  mountainsNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  seaNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  nationalParkNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  parkNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  mallNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  zooNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  churchNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  oldTownNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  monumentNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  museumNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  theatreNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  cinemaNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  amusementParkNearby?: boolean;
  @IsBoolean()
  @CanBeUndefined()
  restaurantNearby?: boolean;
}
