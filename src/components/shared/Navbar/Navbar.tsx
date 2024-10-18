import { MainNav } from './MainNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <header className='w-full p-5 shadow-lg bg-[#262626] font-[oswald]'>
      <div className='flex h-14 items-center px-4'>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
