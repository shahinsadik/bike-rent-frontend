import DashboardLayout from '@/components/layout/DashboardLayout';
import MainLayout from '@/components/layout/MainLayout';
import AboutUs from '@/pages/AboutUs/AboutUs';
import AllBikes from '@/pages/AllBikes/AllBikes';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Home from '@/pages/Home/Home';
import SignIn from '@/pages/SignIn/SignIn';
import SignUp from '@/pages/SignUp/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import BikeDetails from '@/pages/BikeDetails/BikeDetails';
import Profile from '@/pages/Dashboard/User/Profile/Profile';
import AddBike from '@/pages/Dashboard/Admin/AddBike/AddBike';
import Rentals from '@/pages/Dashboard/User/MyRentals/MyRentals';
import ManageBikes from '@/pages/Dashboard/Admin/ManageBikes/ManageBikes';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateBikeInfo from '@/pages/Dashboard/Admin/UpdateBikeInfo/UpdateBikeInfo';
import AdminPrivateRoute from './AdminPrivateRoute/AdminPrivateRoute';
import ManageUsers from '@/pages/Dashboard/Admin/ManageUsers/ManageUsers';
import AllBikesForUser from '@/pages/Dashboard/User/AllBikesForUser/AllBikesForUser';
import UserPrivateRoute from './UserPrivateRoute/UserPrivateRoute';
import ReturnBike from '@/pages/Dashboard/Admin/ReturnBike/ReturnBike';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/all-bikes',
        element: <AllBikes />,
      },
      {
        path: '/bike-details/:id',
        element: <BikeDetails />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/signIn',
        element: <SignIn />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'profile',
        element: <Profile />,
      },
      // user routes
      {
        path: 'my-rentals',
        element: <Rentals />,
      },
      {
        path: 'all-bikes',
        element: (
          <UserPrivateRoute>
            <AllBikesForUser />
          </UserPrivateRoute>
        ),
      },
      // admin routes
      {
        path: 'add-bike',
        element: (
          <AdminPrivateRoute>
            <AddBike />
          </AdminPrivateRoute>
        ),
      },
      {
        path: 'manage-bikes',
        element: (
          <AdminPrivateRoute>
            <ManageBikes />
          </AdminPrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <AdminPrivateRoute>
            <ManageUsers />
          </AdminPrivateRoute>
        ),
      },
      {
        path: 'update-bike/:id',
        element: (
          <AdminPrivateRoute>
            <UpdateBikeInfo />
          </AdminPrivateRoute>
        ),
      },
      {
        path: 'returnBikes',
        element: (
          <AdminPrivateRoute>
            <ReturnBike />
          </AdminPrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
