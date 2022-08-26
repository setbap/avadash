import Home from "lib/pages/home";
import { getDailyTransactionFee } from "lib/requests/home";
export async function getStaticProps() {
  const [dailyTransactionFee] = await Promise.all([getDailyTransactionFee()]);
  return {
    props: { dailyTransactionFee },
    revalidate: 10 * 60,
  };
}
export default Home;
