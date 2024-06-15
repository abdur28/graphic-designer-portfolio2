import Link from 'next/link';
import { Sidebar } from './sidebar';


const Navbar = () => {
  return (
    <section className='flex justify-between items-center sm:px-16 px-8 py-4 fixed top-0 bg-transparent z-20 right-0 left-0'>
      <Link href='/' className='pt-2.5'> 
        <h1 className='text-white/60 font-fog text-2xl lg:text-2xl mt-1 lg:mt-0 hover:text-white transition-all'>Emily M.</h1>
      </Link>
      
      <div className='flex space-x-8 hidden md:block'>
        <Link href='/portfolio' className='text-white/60 text-2xl font-fog hover:text-white transition-all'>Portfolio</Link>
        <Link href='/about' className='text-white/60 text-2xl font-fog hover:text-white transition-all'>About</Link>
        <Link href='/contact' className='text-white/60 text-2xl font-fog hover:text-white transition-all'>Contact</Link>
      </div>
      <div className='md:hidden flex'>
        <Sidebar /> 
      </div>
    </section>
  );
};

export default Navbar;

