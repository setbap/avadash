import Home from "lib/pages/home";
import {
  getAverageFeeOnEachDayOfWeek,
  getDailyAverageTransactionFee,
  getDailyTransactionFee,
  getHourlyTransactionFee,
  getTotalFeeInfo,
} from "lib/requests/home";
export async function getStaticProps() {
  const [
    totalFeeInfo,
    dailyTransactionFee,
    hourlyTransactionFee,
    dailyAverageTransactionFee,
    averageFeeOnEachDayOfWeek,
  ] = await Promise.all([
    getTotalFeeInfo(),
    getDailyTransactionFee(),
    getHourlyTransactionFee(),
    getDailyAverageTransactionFee(),
    getAverageFeeOnEachDayOfWeek(),
  ]);
  return {
    props: {
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
