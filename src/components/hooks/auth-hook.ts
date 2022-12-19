export const useAuth = () => {
  const token = localStorage.getItem('key');
  return {
    isAuth: !!token
  };
};
