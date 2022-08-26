import { IDailyTransactionFee } from "lib/types/types/home";
import { getSimpleArrayData } from "./utils";

// requrest
export const getDailyTransactionFee = () =>
  getSimpleArrayData<IDailyTransactionFee, IDailyTransactionFee>(
    "e040d0a3-79f9-4de9-be49-98d4ce43dfda",
    "Total Transaction Fees ($AVAX)",
    "Day"
  );
