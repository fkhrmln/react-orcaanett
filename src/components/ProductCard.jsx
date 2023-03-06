import { Link } from 'react-router-dom';

const ProductCard = ({ id, productName }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="aspect-[4/3] py-5 px-10 flex justify-center items-center bg-black border border-slate-300 shadow-xl shadow-slate-300 rounded-lg group transition-all duration-500 overflow-hidden hover:scale-95 md:aspect-[3/4] lg:aspect-[4/3]">
        <img
          src={`/${productName.toLowerCase()}-content.jpg`}
          alt="Product Image"
          className="object-cover min-w-[50px] transition-all duration-500 group-hover:scale-125 lg:h-[150px] lg:scale-[0.60] group-hover:lg:scale-[0.85]"
        />
      </div>
    </Link>
  );
};

export default ProductCard;
