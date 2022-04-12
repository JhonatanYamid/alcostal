import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Featured from "../components/Featured";
import HeaderShop from "../components/HeaderShop";
import Layout from "../components/layout/Layout";
import Categories from '../components/Categories';
import FarmSection from "../components/FarmSection";
import { useRouter } from 'next/router'
import {useMemo, useEffect, useState} from "react";
import {getProducts} from "../components/helper.js"

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(getProducts);
    }, [])
   console.log(products);
    return ''

    return (
        <Layout>
            <div className="pt-28 bg-no-repeat bg-top bg-auto bg-[url('/images/bg-section2.png')]">
                <HeaderShop />
                <br />
                <button className="bg-red-500" onClick={reload}>Button</button>
                <Categories categories={categories}/>
                <br /><br />
                <FarmSection farms= {farms} titleSection={"Fincas Cercanas"} />
                <br /><br />
                <Featured products={products} titleSection="Te puede interesar" />
                <br />
                {/* <Featured titleSection = "Destacados"/> */}
                <br />
                {/* <FarmSection titleSection={"Fincas Favoritas"} /> */}
            </div>
        </Layout>
    );
}

// export async function getServerSideProps() {
//     // const { data: products } = await client.query({
//     //     query: gql`
//     //     query products {
//     //         products {
//     //             id,
//     //             name,
//     //             price,
//     //             description,
//     //             discount,
//     //             category{
//     //                 name
//     //             }
//     //             imageProducts{
//     //                 url
//     //             }
//     //         }
//     //     }
//     // `,
//     // });
//     const { data: farms } = await client.query({
//         query: gql`
//         query farms{
//             farms{
//                 id,
//                 name,
//                 address
//                 city {
//                     name
//                 }
//             }
//         }
//     `,
//     });
//     const { data: categories } = await client.query({
//         query: gql`
//         query categories {
//             categories {
//                 id,
//                 name,
//                 image {
//                     id,
//                     url
//                 }
//             }
//         }
//     `,
//     });

//     return {
//         props: {
//             // products: products.products,
//             farms: farms.farms,
//             categories: categories.categories
//         },
//     };
// }

export default Shop;