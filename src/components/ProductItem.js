import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ id, title, description, price, category, image, discount }) => {
    price = new Intl.NumberFormat().format(price);
    return (
        <Link href={`/products/${id}`}>
            <a className="w-[49%] md:w-[24%] rounded-xl shadow-xl overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap">
                {/* Image and discount*/}
                <div className="relative">
                    <div className="max-h-60 w-28 h-28 ">
                        <Image src={image} layout="fill" objectFit="cover" alt="producto" />
                    </div>
                    {discount != 0 &&
                        <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-sm font-medium">
                            Descuento {discount}%
                        </div>
                    }
                </div>
                {/* Title description and category */}
                <div className="px-5">
                    <div className="flex justify-between py-3">
                        <div className="text-sm md:text-md font-bold whitespace-normal break-words w-2/3">
                            {title}
                        </div>
                        <div className="flex items-center justify-center w-auto h-auto bg-gray-200 text-[0.5rem] font-medium text-gray-600 rounded-full px-2 ">
                            {category}
                        </div>
                    </div>
                    <p className="text-xs font-medium text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">
                        {description}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus totam a voluptatum consectetur iusto doloribus ipsam, voluptatem neque aspernatur, iure laborum tempore ipsa nesciunt inventore accusantium eaque quos temporibus.
                    </p>
                    <div className="flex flex-row items-center justify-between">
                        <h3 className="text-xl font-bold text-teal-500 py-5">${price}</h3>
                        <svg className="h-8 w-8 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </div>
            </a>
        </Link >
    );
}

export default ProductItem;