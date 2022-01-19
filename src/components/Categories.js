import ItemCategory2 from "../components/ItemCategory2";

const Categories = () => {
    return (
        <div className="text-slate-500 px-5 md:px-20">
            <h3
                className='text-xl font-bold mb-3 ml-6'>
                Categorias
            </h3>
            <div className='flex flex-row flex-wrap justify-center'>
                <ItemCategory2
                    image="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    title="Animales"
                />
                <ItemCategory2
                    image="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    title="Vegetales"
                />
                <ItemCategory2
                    image="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    title="Frutas"
                />
                <ItemCategory2
                    image="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    title="Granos"
                />
                <ItemCategory2
                    image="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    title="Liquidos"
                />
                <ItemCategory2
                    image="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    title="Fincas"
                />
            </div>
        </div>
    );
}

export default Categories;