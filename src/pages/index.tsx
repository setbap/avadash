import Home from "lib/pages/home";
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
  ] = await Promise.all([
    getTotalBlockInfo(),
    getDailyTPSInfo(),
    getDailyTPBInfo(),
    getDailyBlockAge(),
    //
    getMostPopularActions(),
    getDailyNewWallets(),
    getCurrentNewWallet(),
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
    },
    revalidate: 10 * 60,
  };
}
export default Home;
