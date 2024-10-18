import { logout, useCurrentUser } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

type TAdminRouteProps = {
  children: ReactNode;
};

const AdminPrivateRoute = ({ children }: TAdminRouteProps) => {
  const user = useAppSelector(useCurrentUser);
  const dispatch = useDispatch();

  if (user?.role !== 'admin') {
    dispatch(logout());
    return <Navigate to='/signIn' />;
  }
  return children;
};

export default AdminPrivateRoute;
