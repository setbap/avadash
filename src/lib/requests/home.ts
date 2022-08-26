import {
  IAverageFeeOnEachDayOfWeek,
  IDailyTransactionFee,
  IHourlyTransactionFee,
} from "lib/types/types/home";
import { getSimpleArrayData } from "./utils";

// requrest
export const getDailyTransactionFee = () =>
  getSimpleArrayData<IDailyTransactionFee, IDailyTransactionFee>(
    "e040d0a3-79f9-4de9-be49-98d4ce43dfda",
    "Total Transaction Fees ($AVAX)",
    "Day"
  );

export const getHourlyTransactionFee = () =>
  getSimpleArrayData<IHourlyTransactionFee, IHourlyTransactionFee>(
    "1be92339-bb72-4e37-b567-f0463b9a9e9e",
    "Average Transaction Fees in Each Hour ($AVAX)",
    "Hour"
  );

export const getDailyAverageTransactionFee = () =>
  getSimpleArrayData<IDailyTransactionFee, IDailyTransactionFee>(
    "67b27f71-5a72-49e1-bc75-dc03062ad19e",
    "Daily Average of Transaction Fees ($AVAX)",
    "Day"
  );

export const getAverageFeeOnEachDayOfWeek = () =>
  getSimpleArrayData<IAverageFeeOnEachDayOfWeek, IAverageFeeOnEachDayOfWeek>(
    "fdeb3a93-534a-43d1-9e46-b7a12706e6cc",
    "Average Transaction Fees in Each weekday ($AVAX)",
    "Day Number"
  );
