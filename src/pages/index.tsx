import Home from "lib/pages/home";
import {
  getAverageFeeOnEachDayOfWeek,
  getDailyAverageTransactionFee,
  getDailyTransactionFee,
  getHourlyTransactionFee,
} from "lib/requests/home";
export async function getStaticProps() {
  const [
    dailyTransactionFee,
    hourlyTransactionFee,
    dailyAverageTransactionFee,
    averageFeeOnEachDayOfWeek,
  ] = await Promise.all([
    getDailyTransactionFee(),
    getHourlyTransactionFee(),
    getDailyAverageTransactionFee(),
    getAverageFeeOnEachDayOfWeek(),
  ]);
  return {
    props: {
      dailyTransactionFee,
      hourlyTransactionFee,
      dailyAverageTransactionFee,
      averageFeeOnEachDayOfWeek,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
