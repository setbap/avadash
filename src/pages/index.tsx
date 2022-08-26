import Home from "lib/pages/home";
import {
  getTotalBlockInfo,
  getDailyTPSInfo,
  getDailyTPBInfo,
  getDailyBlockAge,
} from "lib/requests/home";
export async function getStaticProps() {
  const [totalBlockInfo, dailyTPSInfo, dailyTPBInfo, dailyBlockAge] =
    await Promise.all([
      getTotalBlockInfo(),
      getDailyTPSInfo(),
      getDailyTPBInfo(),
      getDailyBlockAge(),
    ]);
  return {
    props: {
      totalBlockInfo,
      dailyTPSInfo,
      dailyTPBInfo,
      dailyBlockAge,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
