import { FiArrowRight } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ResponsiveCarousel from '../components/ResponsiveCarousel';

const Home = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="mt-24 font-poppins">
      <div className="container px-10 mx-auto flex flex-col gap-5 md:flex-row-reverse lg:max-w-4xl">
        <h3 className="text-lg md:hidden">Hi {user.username} !</h3>
        <ResponsiveCarousel />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl tracking-widest uppercase mb-2">OrcaaNett</h3>
            <h5 className="text-slate-700 mb-3">
              Premium doesn't have to be <span className="text-netflix">expensive</span>
            </h5>
            <button
              className="px-2 py-1 max-w-[170px] bg-netflix text-slate-100 text-sm rounded-md md:max-w-[200px]"
              onClick={() => navigate('/products')}
            >
              View All Products <FiArrowRight className="inline ml-1" />
            </button>
          </div>
          <h3 className="hidden text-lg md:block">Hi {user.username} !</h3>
        </div>
      </div>
      <div className="mt-[500px]"></div>
    </div>
  );
};

export default Home;
