import Home from "lib/pages/home";
import {
  getAverageFeeOnEachDayOfWeek,
  getDailyAverageTransactionFee,
  getDailyTransactionFee,
  getHourlyTransactionFee,
  getTotalFeeInfo,
} from "lib/requests/fee";
import {
  getTotalBlockInfo,
  getDailyTPSInfo,
  getDailyTPBInfo,
  getDailyBlockAge,
  getMostPopularActions,
  getDailyNewWallets,
  getCurrentNewWallet,
} from "lib/requests/home";
export async function getStaticProps() {
  const [
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
  ] = await Promise.all([
    getTotalBlockInfo(),
    getDailyTPSInfo(),
    getDailyTPBInfo(),
    getDailyBlockAge(),

    getMostPopularActions(),
    getDailyNewWallets(),
    getCurrentNewWallet(),

    // fee
    getTotalFeeInfo(),
    getDailyTransactionFee(),
    getHourlyTransactionFee(),
    getDailyAverageTransactionFee(),
    getAverageFeeOnEachDayOfWeek(),
  ]);
  return {
    props: {
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
    },
    revalidate: 10 * 60,
  };
}
export default Home;
