import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateVenueDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  postalCode: string;
  @IsString()
  @IsNotEmpty()
  cityName: string;
  @IsNumber()
  @IsNotEmpty()
  latitude: number;
  @IsNumber()
  @IsNotEmpty()
  longitude: number;
  @IsNumber()
  @IsNotEmpty()
  pricePerNightInEUR: number;
  @IsNumber()
  @IsNotEmpty()
  rating: number;
  @IsNumber()
  @IsNotEmpty()
  numberOfReviews: number;
  @IsNumber()
  @IsNotEmpty()
  capacity: number;
  @IsNumber()
  @IsNotEmpty()
  amountOfBeds: number;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  checkInHour: string;
  @IsString()
  @IsNotEmpty()
  checkOutHour: string;
  @IsNumber()
  @IsNotEmpty()
  metersFromCityCenter: number;
  @IsString()
  @IsNotEmpty()
  phone: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsBoolean()
  @IsNotEmpty()
  fireplace: boolean;
  @IsBoolean()
  @IsNotEmpty()
  speakers: boolean;
  @IsBoolean()
  @IsNotEmpty()
  wiFi: boolean;
  @IsBoolean()
  @IsNotEmpty()
  restaurantInHouse: boolean;
  @IsBoolean()
  @IsNotEmpty()
  bar: boolean;
  @IsBoolean()
  @IsNotEmpty()
  pool: boolean;
  @IsBoolean()
  @IsNotEmpty()
  jacuzzi: boolean;
  @IsBoolean()
  @IsNotEmpty()
  garden: boolean;
  @IsBoolean()
  @IsNotEmpty()
  fitnessCenter: boolean;
  @IsBoolean()
  @IsNotEmpty()
  reception24H: boolean;
  @IsBoolean()
  @IsNotEmpty()
  karaoke: boolean;
  @IsBoolean()
  @IsNotEmpty()
  outdoorMusic: boolean;
  @IsBoolean()
  @IsNotEmpty()
  indoorMusic: boolean;
  @IsBoolean()
  @IsNotEmpty()
  library: boolean;
  @IsBoolean()
  @IsNotEmpty()
  petFriendly: boolean;
  @IsBoolean()
  @IsNotEmpty()
  parking: boolean;
  @IsBoolean()
  @IsNotEmpty()
  playground: boolean;
  @IsBoolean()
  @IsNotEmpty()
  kitchen: boolean;
  @IsBoolean()
  @IsNotEmpty()
  bathroom: boolean;
  @IsBoolean()
  @IsNotEmpty()
  hypoallergenicBedding: boolean;
  @IsBoolean()
  @IsNotEmpty()
  tv: boolean;
  @IsBoolean()
  @IsNotEmpty()
  safe: boolean;
  @IsBoolean()
  @IsNotEmpty()
  wheelchairFriendly: boolean;
  @IsBoolean()
  @IsNotEmpty()
  shortGrownFriendly: boolean;
  @IsBoolean()
  @IsNotEmpty()
  blindFriendly: boolean;
  @IsBoolean()
  @IsNotEmpty()
  deafFriendly: boolean;
  @IsBoolean()
  @IsNotEmpty()
  lakeNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  forestNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  mountainsNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  seaNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  nationalParkNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  parkNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  mallNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  zooNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  churchNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  oldTownNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  monumentNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  museumNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  theatreNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  cinemaNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  amusementParkNearby: boolean;
  @IsBoolean()
  @IsNotEmpty()
  restaurantNearby: boolean;
}
