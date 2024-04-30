import { useEffect } from 'react';
import Navbar from '../components/Navbar'
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
const location = useLocation()
  useEffect(()=>{

  }, [location])
  
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  );
};

export default Layout;