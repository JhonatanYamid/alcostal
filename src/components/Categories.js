import ItemCategory2 from "../components/ItemCategory2";

const Categories = ({ categories }) => {
    return (
        <div className="text-slate-500 px-5 md:px-20">
            <h3
                className='text-xl font-bold mb-3 ml-6'>
                Categorias
            </h3>
            <div className='flex flex-row flex-wrap justify-center'>
                {categories.map(category => (
                    <ItemCategory2
                        key={category.id}
                        image={category.image.url}
                        title={category.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Categories;