import {
  IDailyBlockAge,
  IDailyNewWallets,
  IDailyTPBInfo,
  IDailyTPSInfo,
  IMostPopularActions,
  IOverallBlockInfo,
  ITodayNewWallet,
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

export const getMostPopularActions = () =>
  getSimpleArrayData<IMostPopularActions, IMostPopularActions>(
    "9381160f-7c1a-4cd1-ad39-eee128c65c02",
    "Most Popular Type of action By Number of transactions for Avalanche"
  );

export const getDailyNewWallets = () =>
  getSimpleArrayData<IDailyNewWallets, IDailyNewWallets>(
    "e0293c78-59d6-45a1-870c-f6d3bdb059fa",
    "Daily new wallets"
  );

export const getCurrentNewWallet = () =>
  getSimpleInfo<ITodayNewWallet>("a1248e29-464f-4c3d-a4b4-f2d5fe440e56", "");
