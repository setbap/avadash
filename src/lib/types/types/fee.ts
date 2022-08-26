export interface IDailyTransactionFee {
  Fee: number;
  Day: String;
}

export interface IHourlyTransactionFee {
  Fee: number;
  Hour: number;
}

export interface IAverageFeeOnEachDayOfWeek {
  "Day Name": string;
  "Day Number": string;
  Fee: number;
}

export interface ITotalFeeInfo {
  "Total Fee": number;
  "Average Fee": number;
}
