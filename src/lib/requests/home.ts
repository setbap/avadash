import {
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
