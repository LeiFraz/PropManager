import React, {useState, MouseEvent, useEffect} from 'react';
import themeDark from '@/theme/theme';
import {NavbarAdminDesk} from './NavbarAdminDesk';
import {MovilNavbar} from '../MovilNavbar';
import {AppBar, Toolbar, useTheme, useMediaQuery} from '@mui/material';

export const NavbarAdminResponsive = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(themeDark.breakpoints.down('md'));
  const [activeComponent, setActiveComponent] = useState(<NavbarAdminDesk />);

  useEffect(() => {
    setActiveComponent(isMobile ? <MovilNavbar /> : <NavbarAdminDesk />);
  }, [isMobile]);

  return <div>{activeComponent}</div>;
};

export default NavbarAdminResponsive;
