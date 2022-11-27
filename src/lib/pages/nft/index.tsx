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
import { INFTSalesInfo } from "lib/types/types/nft";
import { LineChart } from "recharts";
import LineChartV2 from "lib/components/charts/LineChartV2";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";

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
  collections: string[];
  saleVolume: any[];
  queryLink: string;
  topBasedOnSaleCount: {
    nameKey: string;
    valueKey: number;
  }[];
  topBasedOnSaleVolume: {
    nameKey: string;
    valueKey: number;
  }[];
  coollectionSaleVolumeVSCount: any[];
  coollectionUniqueBuyersVSSellers: any[];
  totalInfo: INFTSalesInfo;
  salesvolumein$AVAX: any[];
  salesCount: any[];
}

const Governance = ({
  collections,
  queryLink,
  saleVolume,
  topBasedOnSaleCount,
  topBasedOnSaleVolume,
  coollectionSaleVolumeVSCount,
  coollectionUniqueBuyersVSSellers,
  totalInfo,
  salesCount,
  salesvolumein$AVAX,
}: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`${names.APP_NAME} Joepegs NFT marketplace | Business Intelligence Dashboard for ${names.BLOCKCHAIN}`}
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
      <Box mx={"auto"} px={{ base: 3, sm: 2, md: 8 }}>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={totalInfo["Total Sales Count"]}
            title="Total Sales Count"
            status="inc"
            link={"719e7647-2ba0-438e-b804-d98a581db530"}
          />
          <StatsCard
            stat={totalInfo["Total Sales Volume"]}
            title="Total Sales Volume"
            status="inc"
            link={"719e7647-2ba0-438e-b804-d98a581db530"}
          />
          <StatsCard
            stat={totalInfo["Total Unique Buyers"]}
            title="Total Unique Buyerss"
            status="inc"
            link={"719e7647-2ba0-438e-b804-d98a581db530"}
          />

          <StatsCard
            stat={totalInfo["Total Unique Sellers"]}
            title="Total Unique Sellers"
            status="inc"
            link={"719e7647-2ba0-438e-b804-d98a581db530"}
          />
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <DonutChart
            data={topBasedOnSaleCount.slice(0, 10)}
            nameKey="NFT Collection"
            dataKey="Sales Count"
            title="NFT collection based on count"
            baseSpan={1}
            modelInfo=""
          />
          <DonutChart
            data={topBasedOnSaleVolume.slice(0, 10)}
            nameKey="NFT Collection"
            dataKey="Sales Volume"
            title="NFT collection based on volume"
            baseSpan={1}
            modelInfo=""
          />
          <BarGraph
            queryLink={queryLink}
            extraInfoToTooltip=""
            modelInfo=""
            values={saleVolume}
            title="volume per NFT collection"
            dataKey="Name"
            oyLabel="Sales Volume"
            oxLabel="Day"
            baseSpan={3}
            labels={collections.map((item, i) => ({
              color: colors[i % colors.length],
              key: item,
            }))}
          />

          <BarGraph
            isSeprate
            isNotDate
            queryLink={queryLink}
            extraInfoToTooltip=""
            modelInfo=""
            values={coollectionSaleVolumeVSCount}
            title="volume of sales in $AVAX and number of sales for each NFT collection"
            dataKey="NFT Collection"
            oyLabel="NFT Collection"
            oxLabel=""
            baseSpan={3}
            labels={[
              {
                color: colors[1],
                key: "Sales Count",
              },
              {
                color: colors[2],
                key: "Sales Volume",
              },
            ]}
          />
          <ChartBox
            queryLink={queryLink}
            modelInfo=""
            data={salesCount}
            areaDataKey="Sales Count"
            xAxisDataKey="Day"
            title="Sales count"
            baseSpan={3}
          />
          <StackedAreaChart
            queryLink={queryLink}
            extraInfoToTooltip=""
            modelInfo=""
            values={coollectionUniqueBuyersVSSellers}
            title="Unique buyers/sellers"
            dataKey="Day"
            oyLabel="Count"
            oxLabel=""
            baseSpan={3}
            labels={[
              {
                color: colors[5],
                key: "Unique Buyers",
              },
              {
                color: colors[3],
                key: "Unique Sellers",
              },
            ]}
          />

          <StackedAreaChart
            queryLink={queryLink}
            extraInfoToTooltip=""
            modelInfo=""
            values={salesvolumein$AVAX}
            title="Sales volume in $AVAX"
            dataKey="Day"
            oyLabel="$Avax"
            oxLabel=""
            baseSpan={3}
            labels={[
              {
                color: colors[1],
                key: "Sales Volume",
              },
              {
                color: colors[2],
                key: "AVG Sales Volume",
              },
            ]}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
