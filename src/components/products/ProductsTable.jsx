import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
    { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200, image: "https://5.imimg.com/data5/SELLER/Default/2024/3/398833580/NI/PN/ZR/10698546/noise-wireless-earbuds-500x500.jpeg" },
    { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800, image: "https://m.media-amazon.com/images/I/81WIcyHQ7oL._AC_UY1100_.jpg" },
    { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650, image: "https://www.leafstudios.in/cdn/shop/files/1_1099cd20-7237-4bdf-a180-b7126de5ef3d.png?v=1722230645" },
    { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950, image: "https://m.media-amazon.com/images/I/71b5fW+s18L.jpg" },
    { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720, image: "https://images.philips.com/is/image/philipsconsumer/vrs_a6f229ac53eb2ad8dcf9e281050310d76783fec6?wid=700&hei=700&$pnglarge$" },
];

const ProductsTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = PRODUCT_DATA.filter(
            (product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
        );

        setFilteredProducts(filtered);
    };

    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
                <div className='relative'>
                    <input
                        type='text'
                        placeholder='Search products...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        onChange={handleSearch}
                        value={searchTerm}
                    />
                    <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
                </div>
            </div>

            <div className='overflow-x-auto'>
                <table className='min-w-full divide-y divide-gray-700'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Name
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Category
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Price
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Stock
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Sales
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className='divide-y divide-gray-700'>
                        {filteredProducts.map((product) => (
                            <motion.tr
                                key={product.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                                    <img
                                        src={product.image}
                                        className='size-10 rounded-full'
                                    />
                                    {product.name}
                                </td>

                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    {product.category}
                                </td>

                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    ${product.price.toFixed(2)}
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.stock}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.sales}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                    <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                                        <Edit size={18} />
                                    </button>
                                    <button className='text-red-400 hover:text-red-300'>
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};
export default ProductsTable;