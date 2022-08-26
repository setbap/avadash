import { ReturnDataType } from "lib/types/types/base";
import moment from "moment";

export const getSimpleInfo = async <T>(
  velocityKey: string,
  title: string
): Promise<ReturnDataType<T>> => {
  const res = await fetch(
    `https://node-api.flipsidecrypto.com/api/v2/queries/${velocityKey}/data/latest`
  );
  const data: T = (await res.json())[0];
  return { data, title, key: velocityKey };
};

export const getSimpleArrayData = async <T, R = null>(
  velocityKey: string,
  title: string,
  sortKey: keyof T | null = null,
  mapFn: ((item: T) => R) | null = null
): Promise<ReturnDataType<T[] | R[]>> => {
  const res = await fetch(
    `https://node-api.flipsidecrypto.com/api/v2/queries/${velocityKey}/data/latest`
  );
  let fetchedData: T[] = await res.json();
  if (sortKey !== null) {
    fetchedData = fetchedData.sort((a, b) =>
      moment(a[sortKey]).isAfter(moment(b[sortKey])) ? 1 : -1
    );
  }
  if (mapFn !== null) {
    return {
      data: fetchedData.map(mapFn),
      title,
      key: velocityKey,
    };
  }

  return {
    data: fetchedData,
    title,
    key: velocityKey,
  };
};

export function pivotData<T extends { [key: string]: any }>(
  rawData: T[],
  xAxisKey2: keyof T,
  nameKey: keyof T,
  valueKey: keyof T,
  bridges: string[],
  minValue: number = 0,
  isDate: boolean = false
) {
  const dailyEachBridgeSum: any = {};
  rawData.forEach((item) => {
    const xAxisKey = isDate
      ? moment(item[xAxisKey2]).format("MM/DD/YYYY")
      : item[xAxisKey2];

    if (!Boolean(item[valueKey]) || item[valueKey] < minValue) {
    } else if (dailyEachBridgeSum[xAxisKey] === undefined) {
      dailyEachBridgeSum[xAxisKey] = {};
      dailyEachBridgeSum[xAxisKey][item[nameKey]] = item[valueKey];
    } else if (dailyEachBridgeSum[xAxisKey][item[nameKey]] === undefined) {
      dailyEachBridgeSum[xAxisKey][item[nameKey]] = item[valueKey];
    } else {
      dailyEachBridgeSum[xAxisKey][item[nameKey]] += item[valueKey];
    }
  });
  const dailyBridgeValue = Object.entries(dailyEachBridgeSum).map((bc) => {
    const finalObject = { Name: bc[0] };
    bridges.forEach((bridge) => {
      // @ts-ignore
      if (bc[1][bridge]) {
        // @ts-ignore
        finalObject[bridge] = bc[1][bridge];
      }
    });
    return finalObject;
  });

  return dailyBridgeValue;
}

/*
function for complex data with pivot

export const getMostPopularTokenSwapCount: () => Promise<any> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/90429960-c3a4-46a0-aa10-be315d0e7362/data/latest"
  );
  const rawData: IMostPoularTokenSwapCountOnRef[] = await res.json();
  const actionType = Array.from(
    new Set(
      rawData.map((item) => {
        return item.type;
      })
    )
  );
  const countInfo = pivotData(
    rawData,
    "Symbol",
    "type",
    "Count",
    actionType,
    0
  );
  return {
    countInfo: countInfo.sort((a, b) =>
      // @ts-ignore
      a[actionType[0]] > b[actionType[0]] ? -1 : 1
    ),
    actions: actionType,
  };
};

*/

/*
change name to reducae conflict
export const getSwapToStablecoinsToOthers: () => Promise<ISankeyChartBase> =
  async () => {
    const res = await fetch(
      "https://node-api.flipsidecrypto.com/api/v2/queries/e2441a8e-19e1-4ebf-aca7-961e1e3023cd/data/latest"
    );
    const fetchedData: IStablecoinSwap[] = await res.json();
    const fromCoins = fetchedData.map((item) => item["Swap from"]);
    const toCoins = fetchedData.map((item) => item["Swap to"] + " ");
    const nodesSet = new Set(fromCoins.concat(toCoins));
    const nodes = Array.from(nodesSet);
    const links = fetchedData.map((item) => ({
      source: item["Swap from"],
      target: item["Swap to"] + " ",
      value: item["Volume USD"],
    }));
    return {
      nodes,
      links,
    };
  };

*/
