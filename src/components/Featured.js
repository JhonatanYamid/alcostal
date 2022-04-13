import ProductItem from "./ProductItem";

const Featured = ({ titleSection, products }) => {
    return (
        <>
            <h3
                className='text-2xl font-bold mb-5 md:ml-6 text-teal-800'>
                {titleSection}
            </h3>
            <div className='flex flex-row flex-wrap justify-between md:px-5 space-y-5'>
                {products.map(product => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.name}
                        description={product.description}
                        price={product.price}
                        category={product.category.name}
                        discount={product.discount}
                        image={product.imageProducts[0] ? product.imageProducts[0].url : '/images/without-image.jpg'}
                    />
                ))}
            </div>
        </>
    );
}

export default Featured;