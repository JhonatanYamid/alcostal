import Jumbotron from "../components/Jumbotron";
import Layout from "../components/layout/Layout";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

export default function Home() {
  return (
    <Layout>
        <Jumbotron />
        <Section1 />
        <Section2 />
        <Section3 />
      </Layout>

  )
}
