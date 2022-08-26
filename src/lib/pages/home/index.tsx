import { Box, GridItem, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import ChartBox from "lib/components/charts/LineChart";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { StatsCard } from "lib/components/charts/StateCard";
import { ReturnDataType } from "lib/types/types/base";

import names from "lib/utility/names";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { FiExternalLink } from "react-icons/fi";

import {
  IDailyBlockAge,
  IDailyNewWallets,
  IDailyTPBInfo,
  IDailyTPSInfo,
  IMostPopularActions,
  IOverallBlockInfo,
  ITodayNewWallet,
} from "lib/types/types/home";
import {
  IAverageFeeOnEachDayOfWeek,
  IDailyTransactionFee,
  IHourlyTransactionFee,
  ITotalFeeInfo,
} from "lib/types/types/fee";

const CalendarChart: any = dynamic(
  () => import("../../components/charts/CalendarChart"),
  { ssr: false }
);

const FlowChart: any = dynamic(
  () => import("../../components/charts/FlowChart"),
  { ssr: false }
);

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

interface Props {
  totalBlockInfo: ReturnDataType<IOverallBlockInfo>;
  dailyTPSInfo: ReturnDataType<IDailyTPSInfo[]>;
  dailyTPBInfo: ReturnDataType<IDailyTPBInfo[]>;
  dailyBlockAge: ReturnDataType<IDailyBlockAge[]>;
  mostPopularActions: ReturnDataType<IMostPopularActions[]>;
  dailyNewWallets: ReturnDataType<IDailyNewWallets[]>;
  currentNewWallet: ReturnDataType<ITodayNewWallet>;
  // fee
  totalFeeInfo: ReturnDataType<ITotalFeeInfo>;
  dailyTransactionFee: ReturnDataType<IDailyTransactionFee[]>;
  hourlyTransactionFee: ReturnDataType<IHourlyTransactionFee[]>;
  dailyAverageTransactionFee: ReturnDataType<IDailyTransactionFee[]>;
  averageFeeOnEachDayOfWeek: ReturnDataType<IAverageFeeOnEachDayOfWeek[]>;
}

const Governance = ({
  totalBlockInfo,
  dailyTPSInfo,
  dailyTPBInfo,
  dailyBlockAge,
  mostPopularActions,
  dailyNewWallets,
  currentNewWallet,
  // fee
  totalFeeInfo,
  dailyTransactionFee,
  hourlyTransactionFee,
  dailyAverageTransactionFee,
  averageFeeOnEachDayOfWeek,
}: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`${names.APP_NAME} NetWork Performance | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`}
        description="Track the latest stats and trends on ${names.BLOCKCHAIN}"
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `${names.APP_NAME} | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`,
          description: `Track the latest stats and trends on ${names.BLOCKCHAIN}`,
          images: [
            {
              url: `https://${names.SITE_URL}/og.png`,
              alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
            },
          ],
          site_name: `${names.APP_NAME}`,
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} px={{ base: 6, sm: 2, md: 8 }}>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={totalFeeInfo.data["Average Fee"]}
            title="Average TX Fee"
            status="inc"
            decimal={4}
            link={totalFeeInfo.key}
          />

          <StatsCard
            stat={totalFeeInfo.data["Total Fee"]}
            title="Total Generated Fee"
            status="inc"
            link={totalFeeInfo.key}
          />
          <StatsCard
            stat={currentNewWallet.data["Current New Wallets"]}
            title="Yesterday New Wallets"
            status="inc"
            link={currentNewWallet.key}
          />
          <StatsCard
            stat={totalBlockInfo.data["Min Block Time"]}
            title="Min Block Time(second)"
            status="inc"
            link={totalBlockInfo.key}
          />
          <StatsCard
            stat={totalBlockInfo.data["Average Block Time"]}
            title="Average Block Time(second)"
            status="unchanged"
            link={totalBlockInfo.key}
          />
          <StatsCard
            stat={totalBlockInfo.data["Max Block Time"]}
            title="Max Block Time(second)"
            status="dec"
            link={totalBlockInfo.key}
          />

          <StatsCard
            stat={totalBlockInfo.data["Min TX count per block"]}
            title="Min TX count per block (TPB)"
            status="dec"
            link={totalBlockInfo.key}
          />
          <StatsCard
            stat={totalBlockInfo.data["Average TX count per block"]}
            title="Average TX count per block (TPB)"
            status="unchanged"
            link={totalBlockInfo.key}
          />
          <StatsCard
            stat={totalBlockInfo.data["Max TX count per block"]}
            title="Max TX count per block (TPB)"
            status="inc"
            link={totalBlockInfo.key}
          />
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <DonutChart
            queryLink={mostPopularActions.key}
            data={mostPopularActions.data}
            modelInfo=""
            title={mostPopularActions.title}
            nameKey="Type"
            dataKey="TX Count"
          />
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[3]}
            data={dailyNewWallets.data}
            queryLink={dailyNewWallets.key}
            modelInfo=""
            title={dailyNewWallets.title}
            baseSpan={2}
            barDataKey="New Wallets"
            lineDataKey="Average New Wallets"
            xAxisDataKey="Day"
          />
          <ChartBox
            customColor={colors[0]}
            data={dailyTransactionFee.data}
            queryLink={dailyTransactionFee.key}
            modelInfo=""
            title={dailyTransactionFee.title}
            baseSpan={3}
            areaDataKey="Fee"
            xAxisDataKey="Day"
          />

          <ChartBox
            customColor={colors[0]}
            data={hourlyTransactionFee.data}
            queryLink={hourlyTransactionFee.key}
            modelInfo=""
            title={hourlyTransactionFee.title}
            baseSpan={3}
            extraDecimal={8}
            areaDataKey="Fee"
            isNotDate
            xAxisDataKey="Hour"
          />

          <ChartBox
            customColor={colors[0]}
            data={averageFeeOnEachDayOfWeek.data}
            queryLink={averageFeeOnEachDayOfWeek.key}
            modelInfo=""
            title={averageFeeOnEachDayOfWeek.title}
            baseSpan={3}
            extraDecimal={8}
            areaDataKey="Fee"
            isNotDate
            xAxisDataKey="Day Name"
          />

          <ChartBox
            customColor={colors[3]}
            data={dailyAverageTransactionFee.data}
            queryLink={dailyAverageTransactionFee.key}
            modelInfo=""
            extraDecimal={8}
            title={dailyAverageTransactionFee.title}
            baseSpan={3}
            additionalDumpTextToAddKeyToKeyBeUnique={"-"}
            areaDataKey="Fee"
            xAxisDataKey="Day"
          />
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[3]}
            data={dailyTPSInfo.data}
            queryLink={dailyTPSInfo.key}
            modelInfo=""
            title={dailyTPSInfo.title}
            baseSpan={3}
            barDataKey="TPS"
            lineDataKey="Average TPS"
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[3]}
            data={dailyTPBInfo.data}
            queryLink={dailyTPBInfo.key}
            modelInfo=""
            title={dailyTPBInfo.title}
            baseSpan={3}
            barDataKey="TX per Block"
            lineDataKey="Average TX in Block"
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            additionalDumpTextToAddKeyToKeyBeUnique="tps"
            data={dailyBlockAge.data}
            queryLink={dailyBlockAge.key}
            modelInfo=""
            title={dailyBlockAge.title}
            baseSpan={3}
            barDataKey="Daily Block Age"
            lineDataKey="Average Block Time"
            xAxisDataKey="Day"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
