import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { PRODUCTS_URL } from '../utils/constants';

const fetchProductById = ({ queryKey }) => axios.get(`${PRODUCTS_URL}/${queryKey[1]}`);

const ProductDetail = () => {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: product,
  } = useQuery(['products', id], fetchProductById, {
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

  return (
    <div className="mt-24 container mx-auto">
      <div className="mx-auto max-w-sm px-10 flex flex-col justify-center items-center md:flex-row md:gap-10 md:max-w-4xl">
        <div className="aspect-[4/3] max-w-xs mx-auto my-10 rounded-lg border border-slate-300 overflow-hidden shadow-xl shadow-slate-300 bg-black flex justify-center items-center flex-1 md:my-0">
          <img src={`/${product.productName.toLowerCase()}-content.jpg`} alt="Product Image" className="scale-50" />
        </div>
        <div className="max-w-sm flex-1">
          <h3 className="font-bold text-2xl text-center mb-2">{product.productName}</h3>
          <div className="flex justify-center gap-10">
            {product?.productItems?.type?.sharing && (
              <div className="text-center">
                <p className="font-semibold text-lg my-2">Sharing</p>
                {product?.productItems?.type?.sharing?.map((item, index) => (
                  <p key={index} className="">
                    {item.price} / {item.time}
                  </p>
                ))}
              </div>
            )}
            {product?.productItems?.type?.private && (
              <div className="text-center">
                <p className="font-semibold text-lg my-2">Private</p>
                {product?.productItems?.type?.private?.map((item, index) => (
                  <p key={index} className="">
                    {item.price} / {item.time}
                  </p>
                ))}
              </div>
            )}
            {product?.productItems?.type?.inplan && (
              <div className="text-center">
                <p className="font-semibold text-lg my-2">Inplan</p>
                {product?.productItems?.type?.inplan?.map((item, index) => (
                  <p key={index} className="">
                    {item.price} / {item.time}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-[500px]"></div>
    </div>
  );
};

export default ProductDetail;
