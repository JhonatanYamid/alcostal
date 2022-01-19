import Featured from "../components/Featured";
import HeaderShop from "../components/HeaderShop";
import Layout from "../components/layout/Layout";
import Categories from '../components/Categories';
import FarmSection from "../components/FarmSection";

const Shop = () => {
    return (
        <Layout>
            <div className="pt-28 bg-no-repeat bg-top bg-auto bg-[url('/images/bg-section2.png')]">
                <HeaderShop />
                <br />
                <Categories />
                <br /><br />
                <Featured titleSection = "Destacados"/>
                <br />
                <FarmSection titleSection={"Fincas Cercanas"} />
                <br />
                <Featured titleSection = "Favoritos"/>
                <br />
                <Featured titleSection = "Destacados"/>
            </div>
        </Layout>
    );
}

export default Shop;