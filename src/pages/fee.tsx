import Fee from "lib/pages/fee";
import {
  getAverageFeeOnEachDayOfWeek,
  getDailyAverageTransactionFee,
  getDailyTransactionFee,
  getHourlyTransactionFee,
  getTotalFeeInfo,
} from "lib/requests/fee";
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
export default Fee;
