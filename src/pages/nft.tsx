import NFT from "lib/pages/nft";
import { getNFTSalesInfo } from "lib/requests/nfts";
export async function getStaticProps() {
  const nFTSalesInfo = await getNFTSalesInfo();
  return {
    props: nFTSalesInfo,
    revalidate: 10 * 60,
  };
}
export default NFT;
