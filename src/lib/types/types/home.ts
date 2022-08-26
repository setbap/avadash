export interface IOverallBlockInfo {
  "Min Block Time": number;
  "Max Block Time": number;
  "Average Block Time": number;
  "Min TX count per block": number;
  "Max TX count per block": number;
  "Average TX count per block": number;
}

export interface IDailyTPSInfo {
  Day: string;
  TPS: number;
  "Average TPS": number;
}

export interface IDailyTPBInfo {
  Day: number;
  "TX per Block": number;
  "Average TX in Block": number;
}

export interface IDailyBlockAge {
  Day: string;
  "Min Block Time": number;
  "Max Block Time": number;
  "Average Block Time": number;
  "Daily Block Age": number;
}
