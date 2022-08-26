import {
  IDailyBlockAge,
  IDailyTPBInfo,
  IDailyTPSInfo,
  IOverallBlockInfo,
} from "lib/types/types/home";
import { getSimpleArrayData, getSimpleInfo } from "./utils";

export const getTotalBlockInfo = () =>
  getSimpleInfo<IOverallBlockInfo>("7a203019-4336-424c-9587-88ecf5c52171", "");

export const getDailyTPSInfo = () =>
  getSimpleArrayData<IDailyTPSInfo, IDailyTPSInfo>(
    "c1daab7a-6b23-43b6-9054-6a74af065536",
    "Daily transaction per second (TPS)",
    "Day"
  );

export const getDailyTPBInfo = () =>
  getSimpleArrayData<IDailyTPBInfo, IDailyTPBInfo>(
    "2bd4a8c3-a1df-4f69-8e7c-230182c4e4e2",
    "Daily transaction per block (TPB)",
    "Day"
  );

export const getDailyBlockAge = () =>
  getSimpleArrayData<IDailyBlockAge, IDailyBlockAge>(
    "4089dcea-e350-48ec-b608-35f6e8b64036",
    "Daily Block Age (sec)",
    "Day"
  );
