import client from "../../apollo-client";
import { gql } from "@apollo/client";
export const responsiveNavbar = () => {
    const nav = document.querySelector('#menu');
    nav.classList.toggle('hidden')
}
// export const changeNavbackground = () => {
//     console.log(window.scrollY);
//     if (window.scrollY >= 30) {
//         document.querySelector("#navbar").classList.add("navbar-active");
//         document.querySelector("#navbar").classList.remove("navbar-inactive");
//     }else{
//         document.querySelector("#navbar").classList.remove("navbar-active");
//         document.querySelector("#navbar").classList.add("navbar-inactive");
//     }
// }

export const getProducts = async () => {
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
    return products.products;
}