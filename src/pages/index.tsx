import Home from "lib/pages/home";
import {} from "lib/requests/home";
export async function getStaticProps() {
  const [] = await Promise.all([]);
  return {
    props: {},
    revalidate: 10 * 60,
  };
}
export default Home;
