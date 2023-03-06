import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (!user.username) return <Navigate to="/sign-in" />;

  return children;
};

export default RequireAuth;
