import ItemCategory from "../components/ItemCategory";
import {useRouter} from 'next/router'

const Categories = ({ categories }) => {
    const router = useRouter();
    const showTitle = router.pathname === '/' ? 'invisible' : 'visible';
    return (
        <div>
            <h3
                className={showTitle+' text-xl ml-5 font-bold text-slate-500 text-center'}>
                Categorias
            </h3>
            <div className='space-x-4 space-y-4 flex flex-row flex-wrap justify-center md:pb-0
            '>
                {categories.map(category => (
                    <ItemCategory
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