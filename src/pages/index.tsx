import Home from "lib/pages/home";
import {
  getDailyTransactionFee,
  getHourlyTransactionFee,
} from "lib/requests/home";
export async function getStaticProps() {
  const [dailyTransactionFee, hourlyTransactionFee] = await Promise.all([
    getDailyTransactionFee(),
    getHourlyTransactionFee(),
  ]);
  return {
    props: { dailyTransactionFee, hourlyTransactionFee },
    revalidate: 10 * 60,
  };
}
export default Home;
