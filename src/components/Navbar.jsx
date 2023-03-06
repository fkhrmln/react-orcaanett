import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { signOut } from '../app/userSlice';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const styleOpen = 'absolute top-0 right-0 bg-black h-screen w-8/12 transition-all duration-300 sm:w-1/2';

  const styleClose = 'absolute top-0 -right-full bg-black h-screen w-8/12 transition-all duration-300 sm:w-1/2';

  const activeLinkStyle = ({ isActive }) => {
    return {
      color: isActive && '#e50914',
    };
  };

  const signOutHandler = () => {
    setIsSidebarOpen(false);

    dispatch(signOut());
  };

  // let prevScrollpos = window.pageYOffset;

  // window.onscroll = () => {
  //   const currentScrollPos = window.pageYOffset;

  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById('navbar').classList.remove('-top-24');
  //     document.getElementById('navbar').classList.add('top-0');
  //   } else {
  //     document.getElementById('navbar').classList.remove('top-0');
  //     document.getElementById('navbar').classList.add('-top-24');
  //   }

  //   prevScrollpos = currentScrollPos;
  // };

  return (
    <div id="navbar" className="fixed top-0 left-0 right-0 z-10 transition-all duration-150 backdrop-blur-sm">
      <div className="flex justify-between items-center px-10 py-5">
        <h1 className="font-marker text-xl text-gradient-netflix px-1 cursor-pointer" onClick={() => navigate('/')}>
          <span>Orcaa</span>
          <span>Nett</span>
        </h1>
        <div className="hidden md:block">
          <ul className="flex justify-between gap-x-16">
            <li>
              <NavLink to="/" style={activeLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" style={activeLinkStyle}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={activeLinkStyle}>
                About
              </NavLink>
            </li>
            <li>
              {user.username ? (
                <NavLink to="/sign-in" style={activeLinkStyle} onClick={signOutHandler}>
                  Sign Out
                </NavLink>
              ) : (
                <NavLink to="/sign-in" style={activeLinkStyle}>
                  Sign In
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="font-poppins md:hidden">
          <HiMenuAlt1
            className="text-2xl -rotate-180 cursor-pointer text-netflix"
            onClick={() => setIsSidebarOpen(true)}
          />
          <div className={isSidebarOpen ? styleOpen : styleClose}>
            <ul className="flex flex-col items-center text-white">
              <li className="w-full text-center">
                <Link
                  to="/"
                  className="block w-full py-14 text-netflix sm:py-16"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="w-full text-center">
                <Link
                  to="/products"
                  className="block w-full py-14 text-netflix sm:py-16"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li className="w-full text-center">
                <Link
                  to="/about"
                  className="block w-full py-14 text-netflix sm:py-16"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="w-full text-center">
                <Link
                  to="/sign-in"
                  className="block w-full py-14 text-netflix sm:py-16"
                  onClick={user.username ? signOutHandler : () => setIsSidebarOpen(false)}
                >
                  {user.username ? 'Sign Out' : 'Sign In'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
