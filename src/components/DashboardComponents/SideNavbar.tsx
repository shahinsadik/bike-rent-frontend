import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Bike,
  ChevronRight,
  PlusCircle,
  Undo2,
  UserPen,
  UsersRound,
} from 'lucide-react';
import { Nav } from '../ui/nav';
import { LucideIcon } from 'lucide-react';

type NavLink = {
  title: string;
  to: string;
  icon: LucideIcon;
  variant?: 'default' | 'ghost';
  adminOnly?: boolean;
  userOnly?: boolean;
};

const SideNavbar = ({ role }: { role: 'admin' | 'user' }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navLinks: NavLink[] = [
    {
      title: 'Profile',
      to: 'profile',
      icon: UserPen,
      variant: 'default',
      adminOnly: false,
      userOnly: false,
    },
    {
      title: 'Add Bike',
      to: 'add-bike',
      icon: PlusCircle,
      variant: 'default',
      adminOnly: true,
      userOnly: false,
    },
    {
      title: 'Manage Bikes',
      to: 'manage-bikes',
      icon: Bike,
      variant: 'default',
      adminOnly: true,
      userOnly: false,
    },
    {
      title: 'Manage Users',
      to: 'manage-users',
      icon: UsersRound,
      variant: 'default',
      adminOnly: true,
      userOnly: false,
    },
    {
      title: 'All Bikes',
      to: 'all-bikes',
      icon: Bike,
      variant: 'default',
      adminOnly: false,
      userOnly: true,
    },
    {
      title: 'My Rentals',
      to: 'my-rentals',
      icon: PlusCircle,
      variant: 'default',
      adminOnly: false,
      userOnly: true,
    },
    {
      title: 'Return Bikes',
      to: 'returnBikes',
      icon: Undo2,
      variant: 'default',
      adminOnly: true,
      userOnly: false,
    },
  ];

  // Filter links based on role
  const filteredLinks = navLinks.filter((link) => {
    if (role === 'admin') return !link.userOnly; // Show only non-user-specific links for admin
    if (role === 'user') return !link.adminOnly; // Show user-specific links and non-admin links for users
    return false;
  });

  return (
    <div className='relative min-w-[80px] lg:min-h-[100vh] border-r px-3 lg:pt-10 font-[oswald]'>
      <div className='my-10'>
        <Button
          variant='orangeBtn'
          onClick={() => setIsCollapsed(!isCollapsed)}
          className='lg:absolute lg:right-[-20%] right-20 lg:top-5 hidden lg:block'
        >
          <ChevronRight
            className={`h-6 w-6 transition-transform ${
              isCollapsed ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </div>
      <Nav isCollapsed={isCollapsed} links={filteredLinks} />
    </div>
  );
};

export default SideNavbar;
