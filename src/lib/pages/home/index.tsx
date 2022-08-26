import { Box, GridItem, Heading, Link, SimpleGrid } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import ChartBox from "lib/components/charts/LineChart";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { StatsCard } from "lib/components/charts/StateCard";
import { ReturnDataType } from "lib/types/types/base";
import { IDailyTransactionFee } from "lib/types/types/home";
import names from "lib/utility/names";

import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { FiExternalLink } from "react-icons/fi";

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
  dailyTransactionFee: ReturnDataType<IDailyTransactionFee[]>;
}

const Governance = ({ dailyTransactionFee }: Props): JSX.Element => {
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
          {/* put cards */}
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
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
