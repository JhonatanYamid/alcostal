import ProductItem from "./ProductItem";

const Featured = ({ titleSection }) => {
    return (
        <div className="px-5 md:px-20">
            <h3
                className='text-2xl font-bold mb-5 md:ml-6 text-teal-800'>
                {titleSection}
            </h3>
            <div className='flex flex-row flex-wrap justify-center'>
                <ProductItem
                    title="Zanahoria"
                    description="Es de la finca de Julio..."
                    price="30000"
                    category = "Vegetales"
                    image = "zanahoria.jpg"
                />
                <ProductItem
                    title="Leche"
                    description="Es de la finca Pacho..."
                    price="5000"
                    category = "Lacteos"
                    image = "leche.jpg"
                />
                <ProductItem
                    title="Papa"
                    description="Es de la finca Oscar..."
                    price="10000"
                    category = "Verduras"
                    image = "papa.jpg"
                />
                <ProductItem
                    title="Pescado"
                    description="Es de la finca de Julio..."
                    price="200000"
                    category = "Animales"
                    image = "pescado.jpg"
                />
            </div>
        </div>
    );
}

export default Featured;