import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/layout/Layout";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

export default function Home({ categories }) {
  return (
    <Layout>
      <Jumbotron />
      <Section1 />
      <Section2 />
      <Section3 categories={categories}/>
    </Layout>

  )
}
export async function getServerSideProps() {

  const { data: categories } = await client.query({
    query: gql`
      query categories {
          categories {
              id,
              name,
              image {
                  id,
                  url
              }
          }
      }
  `,
  });

  return {
    props: {
      categories: categories.categories
    },
  };
}