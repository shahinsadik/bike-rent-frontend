import { logout, useCurrentUser } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

type TUserRouteProps = {
  children: ReactNode;
};

const UserPrivateRoute = ({ children }: TUserRouteProps) => {
  const user = useAppSelector(useCurrentUser);
  const dispatch = useDispatch();

  if (user?.role !== 'user') {
    dispatch(logout());
    return <Navigate to='/signIn' />;
  }
  return children;
};

export default UserPrivateRoute;
