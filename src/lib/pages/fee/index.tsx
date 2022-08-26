import { Box, SimpleGrid } from "@chakra-ui/react";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import { ReturnDataType } from "lib/types/types/base";
import {
  IAverageFeeOnEachDayOfWeek,
  IDailyTransactionFee,
  IHourlyTransactionFee,
  ITotalFeeInfo,
} from "lib/types/types/fee";
import names from "lib/utility/names";

import { NextSeo } from "next-seo";

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
  totalFeeInfo: ReturnDataType<ITotalFeeInfo>;
  dailyTransactionFee: ReturnDataType<IDailyTransactionFee[]>;
  hourlyTransactionFee: ReturnDataType<IHourlyTransactionFee[]>;
  dailyAverageTransactionFee: ReturnDataType<IDailyTransactionFee[]>;
  averageFeeOnEachDayOfWeek: ReturnDataType<IAverageFeeOnEachDayOfWeek[]>;
}

const Governance = ({
  totalFeeInfo,
  dailyTransactionFee,
  hourlyTransactionFee,
  dailyAverageTransactionFee,
  averageFeeOnEachDayOfWeek,
}: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`${names.APP_NAME} (Dapss - Ref) | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`}
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
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
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
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
