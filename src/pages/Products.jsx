import axios from 'axios';
import { useQuery } from 'react-query';
import BarLoader from 'react-spinners/BarLoader';
import ProductCard from '../components/ProductCard';
import { PRODUCTS_URL } from '../utils/constants';

const fetchProducts = () => axios.get(`${PRODUCTS_URL}`);

const Products = () => {
  const {
    isLoading,
    isError,
    data: products,
  } = useQuery(['products'], fetchProducts, {
    select: (data) => data.data,
  });

  if (isLoading) {
    return (
      <div className="mt-24 h-[70vh] flex justify-center items-center">
        <BarLoader loading={isLoading} color="#e50914" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-24 h-[70vh] flex justify-center items-center">
        <h3 className="text-netflix">Something Wen't Wrong</h3>
      </div>
    );
  }

  const productsGrid = {
    gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
  };

  return (
    <div className="mt-24 font-poppins">
      <div className="max-w-md  mx-auto px-10 grid gap-10 place-items-center lg:max-w-3xl" style={productsGrid}>
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="mt-[500px]"></div>
    </div>
  );
};

export default Products;
