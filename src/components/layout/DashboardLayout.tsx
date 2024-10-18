import { Outlet } from 'react-router-dom';
import SideNavbar from '../DashboardComponents/SideNavbar';
import Navbar from '../shared/Navbar/Navbar';
import { useAppSelector } from '@/redux/hooks';
import { useCurrentUser } from '@/redux/features/auth/authSlice';

const DashboardLayout = () => {
  const user = useAppSelector(useCurrentUser);

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className='flex lg:flex-row flex-col '>
          <div className=''>
            {user && (
              <SideNavbar role={user?.role as 'user' | 'admin'}></SideNavbar>
            )}
          </div>
          <div className='lg:w-[90%] lg:ml-10 mx-3'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
