export type TBike = {
  _id?: string;
  name: string;
  description: string;
  image: string;
  pricePerHour: number;
  cc: number;
  year: number;
  model: string;
  brand: string;
  isAvailable?: boolean;
};
