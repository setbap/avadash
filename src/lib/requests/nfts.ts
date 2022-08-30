import { INFTSalesInfo } from "lib/types/types/nft";
import {
  getSimpleArrayData,
  pivotData,
  summerizeRow,
  summerizeRow2Item,
} from "./utils";

export const _getNFTSalesInfo = () =>
  getSimpleArrayData<INFTSalesInfo, INFTSalesInfo>(
    "719e7647-2ba0-438e-b804-d98a581db530",
    "Joepegs NFT marketplace",
    "Day"
  );

export const getNFTSalesInfo = async () => {
  const { data, key: queryLink } = await _getNFTSalesInfo();
  const collections = Array.from(
    new Set(
      data.map((item) => {
        return item["NFT Collection"];
      })
    )
  );
  const saleVolume = pivotData(
    data.map((item) => ({
      Day: item["Day"],
      "NFT Collection": item["NFT Collection"],
      "Sales Volume": item["Sales Volume"],
    })),
    "Day",
    "NFT Collection",
    "Sales Volume",
    collections,
    0,
    true
  );

  const coollectionSaleCount = summerizeRow(
    data,
    "NFT Collection",
    "Sales Count"
  ) as any[];

  const topBasedOnSaleCount = coollectionSaleCount.sort(
    (a, b) => b["Sales Count"] - a["Sales Count"]
  );

  const coollectionSaleVolume = summerizeRow(
    data,
    "NFT Collection",
    "Sales Volume"
  ) as any[];

  const topBasedOnSaleVolume = coollectionSaleVolume.sort(
    (a, b) => b["Sales Volume"] - a["Sales Volume"]
  );

  const coollectionSaleVolumeVSCount = summerizeRow2Item(
    data,
    "NFT Collection",
    "Sales Volume",
    "Sales Count"
  ) as any[];

  const coollectionUniqueBuyersVSSellers = summerizeRow2Item(
    data,
    "Day",
    "Unique Buyers",
    "Unique Sellers",
    true
  ) as any[];

  const salesvolumein$AVAX = summerizeRow2Item(
    data,
    "Day",
    "Sales Volume",
    "AVG Sales Volume",
    true
  ) as any[];

  const salesCount = summerizeRow2Item(
    data,
    "Day",
        ,
    "Sales Count",
    true
  ) as any[];

  summerizeRow2Item;

  const totalInfo = data[0];

  return {
    queryLink,
    collections,
    saleVolume,
    topBasedOnSaleCount,
    topBasedOnSaleVolume,
    coollectionSaleVolumeVSCount,
    coollectionUniqueBuyersVSSellers,
    totalInfo,
    salesvolumein$AVAX,
    salesCount,
  };
};
