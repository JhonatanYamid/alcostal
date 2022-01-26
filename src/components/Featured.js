import ProductItem from "./ProductItem";

const Featured = ({ titleSection, products }) => {
    return (
        <div className="px-5 md:px-20">
            <h3
                className='text-2xl font-bold mb-5 md:ml-6 text-teal-800'>
                {titleSection}
            </h3>
            <div className='flex flex-row flex-wrap justify-center'>
                {products.map(product => (
                    <ProductItem
                        key={product.id}
                        title={product.name}
                        description={product.description}
                        price={product.price}
                        category={product.category.name}
                        discount={product.discount}
                        image="https://lh3.googleusercontent.com/fife/AAWUweUI-HRlr1oGoHElp9_dg1OqqDB697oGaDK3KQv4YL7rFJZJC72o6E3T8v2UBfnqZdHizChjji1nx0SG6-ilZLO2VVU03TNa9WF-YApPAj_V0ZWb4aPWyVJnoABgTZjZCrcb5YQDd5oFy-Tjr9RIkc6czoh6IGUPawIbNcGG0rYMfL2jjS9XMh_237QIKUqRCuaawVjlsPI3QZ5ThMJPNPtPA3Ct9jarWnmIgKJ4NMDR0F5oYLFUixuSPoNYCz_YX4bYmXaRBQXvlxSfIkzM3rgz1RDgic4sKaSTXfTI-B3o76tmUqD2fk5Eh5lhdpoUTn85p9qvZ1QcAzhgJn30JyUtRlXqPhR-avvd5mhJ9bdDYy1Y3t4h7d7zCl5ApeSZ1VAXWx7XeRQv5f8BII61hcDJRfSOB2TprZlgjl7lxtB_6SrarE8JNDj3T4lW-77lIqCV5N2LAu0IwBqfRUDCxfEF1V2-LQGsOR8mHXLqxwHOLL9SkrWxKILYWBjyQY4JLHXu08Qk8sz53x1gnVoYoHug66pdTR7GYfwDQh1escrVUcWMU05xGg22UfZBLpKqu2_o5Q4d43zdpfFOQUoFwpXFGxsLusZXVaigGNq9xOwCfF5NXCCOfxJmE9HyFQBDQD3KCxFh9g-uJvC2jFkiEwPisp7aY90pJ_LPq82Z_HmTlt4q5kqXea5lGEBN67fQobRStdw3R_ileerGCZfV_kS4HCvnl_Mc9Q=w1922-h873-ft"
                    />
                ))}
            </div>
        </div>
    );
}

export default Featured;