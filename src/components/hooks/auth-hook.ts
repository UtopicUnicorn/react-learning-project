export const useAuth = () => {
  const login = localStorage.getItem('key');
  return {
    isAuth: !!login
  };
};
