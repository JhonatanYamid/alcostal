import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Featured from "../components/Featured";
import HeaderShop from "../components/HeaderShop";
import Layout from "../components/layout/Layout";
import Categories from '../components/Categories';
import FarmSection from "../components/FarmSection";

const Shop = ({ products, farms, categories }) => {

    return (
        <Layout>
            <div className="bg-no-repeat bg-top bg-auto bg-[url('/images/bg-section2.png')] space-y-10 px-5 md:px-20">
                <HeaderShop />
                <Categories categories={categories}/>
                <FarmSection farms= {farms} titleSection={"Fincas Cercanas"} />
                <Featured products={products} titleSection="Te puede interesar" />
                {/* <Featured titleSection = "Destacados"/> */}
                {/* <FarmSection titleSection={"Fincas Favoritas"} /> */}
            </div>
        </Layout>
    );
}
export default Shop;
export async function getServerSideProps() {
    const { data: products } = await client.query({
        query: gql`
        query products {
            products {
                id,
                name,
                price,
                description,
                discount,
                category{
                    name
                }
                imageProducts{
                    url
                }
            }
        }
    `,
    });
    const { data: farms } = await client.query({
        query: gql`
        query farms{
            farms{
                id,
                name,
                address
                city {
                    name
                }
            }
        }
    `,
    });
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
            products: products.products,
            farms: farms.farms,
            categories: categories.categories
        },
    };
}
