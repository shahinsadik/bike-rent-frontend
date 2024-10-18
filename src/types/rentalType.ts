export type TRental = {
  _id?: string;
  userId?: string;
  bikeId: string;
  startTime: string;
  returnTime?: string | null;
  totalCost?: number;
  isReturned: boolean;
  isPaid: boolean;
};
