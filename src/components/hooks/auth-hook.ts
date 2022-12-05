import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';

export const useAuth = () => {
  const { login } = useSelector((state: RootState) => state.auth);
  return {
    isAuth: !!login
  };
};
