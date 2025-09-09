import { useEffect } from "react";
import { fetchProducts } from "../store/reducers/Product";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
   const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="flex justify-center items-center h-screen text-2xl text-gray-700 font-semibold">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="flex justify-center items-center h-screen text-2xl text-red-500 font-semibold">Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">All Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col p-6"
          >
            <div className="flex justify-center items-center h-64 overflow-hidden mb-4">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
              
              <div className="mt-auto">
                <p className="text-xl font-bold text-indigo-600 mb-2">${product.price}</p>
                <div className="flex items-center text-yellow-500 mb-2">
                  <span className="font-semibold mr-1">{product.rating.rate}</span>
                  <span>⭐</span>
                  <span className="text-gray-500 text-sm ml-2">({product.rating.count} reviews)</span>
                </div>
                <button 
                  className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
