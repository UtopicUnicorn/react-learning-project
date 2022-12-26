import { Navigate } from 'react-router-dom';
import { useAuth } from './auth-hook';

const Protected = ({ children }: any) => {
  const token = localStorage.getItem('key');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;
