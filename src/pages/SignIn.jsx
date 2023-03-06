import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../app/userSlice';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInHandler = (e) => {
    e.preventDefault();

    dispatch(signIn({ username, password }));

    navigate('/');
  };

  return (
    <div className="mt-24 px-10 h-[70vh] flex justify-center items-center">
      <div className="container mx-auto max-w-xs p-5 font-poppins rounded-lg border border-slate-300 shadow-xl shadow-slate-300 md:max-w-md">
        <h3 className="text-center font-bold text-xl mb-5">Sign In</h3>
        <form autoComplete="off" onSubmit={signInHandler} className="flex flex-col">
          <label htmlFor="username" className="block">
            Username
          </label>
          <input
            type="text"
            id="username"
            spellCheck="false"
            className="border border-slate-500 rounded-md my-1 w-full py-1 px-2"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            id="password"
            spellCheck="false"
            className="border border-slate-500 rounded-md my-1 w-full py-1 px-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-netflix text-white px-2 py-1 mt-3 rounded-md self-center">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
