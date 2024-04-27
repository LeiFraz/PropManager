import React, {useState, MouseEvent} from 'react';
import themeDark from '@/theme/theme';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Container,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  styled,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {ContainerHeader} from './ContainerHeader';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';
import {Widgets} from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from '@/styles/navbar.module.css';
import Image from 'next/image';
import bell from '../../../../public/img/bell.png';
import logo from '../../../../public/img/logo.png';

const pages = ['Perfil', 'Reportes anteriores', 'Ajustes'];

const MenuContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '15px',
  background: '#2A3185',
  width: '30px',
  height: '30px',
  borderRadius: '10%',
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.08)',
  [themeDark.breakpoints.up('sm')]: {
    width: '45px',
    height: '45px',
  },
});

const StyledIcon = styled(MenuIcon)({
  width: '25px',
  height: '25px',
  color: 'white',
  [themeDark.breakpoints.up('sm')]: {
    width: '40px',
    height: '40px',
  },
});

const StyledMenu = styled(MenuList)({
  display: 'flex',
  padding: '10px',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: `${themeDark.palette.primary.main}`,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 0 15px 15px',
  opacity: '0.9',
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.9)',
});

const StyledAvatar = styled(Avatar)({
  width: '30px',
  height: '30px',
  margin: '15px',
  [themeDark.breakpoints.up('sm')]: {
    width: '40px',
    height: '40px',
  },
});

export const NavbarAdminDesk = () => {
  return (
    <ContainerHeader sx={{height: '65px'}}>
      <Grid
        container
        sx={{
          backgroundColor: 'white',
          width: '85%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '25px 0 25px 25px',
          padding: '3px',
        }}
      >
        <Grid
          sx={{
            width: '50%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            borderRadius: '20px 0 0 20px',
          }}
        >
          <Grid item sx={{width: '20%'}}>
            {/* flechas */}
            <Box
              sx={{
                display: 'flex',
                color: 'white',
                backgroundColor: '#9747FF',
                borderRadius: '20px',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'cemter',
                padding: '6px',
              }}
            >
              <Box
                sx={{
                  width: '35%',
                  backgroundColor: '#7B96FE',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                }}
              >
                <ArrowBackIcon />{' '}
              </Box>
              <Box
                sx={{
                  width: '35%',
                  backgroundColor: '#7B96FE',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                }}
              >
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
              alignItems: 'flex-end',
              paddingLeft: '50px',
            }}
          >
            {' '}
            {/* paginas */}
            <Box sx={{width: '40%'}}>
              <Link
                href="#"
                underline="none"
                sx={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: '#C4FF47',
                  },
                  '&:active': {
                    backgroundColor: '#9747FF',
                    transform: 'scale(0.98)',
                    color: 'white',
                  },
                }}
              >
                Locadores
              </Link>
            </Box>
            <Box sx={{width: '40%'}}>
              <Link
                href="#"
                underline="none"
                sx={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: '#C4FF47',
                  },
                  '&:active': {
                    backgroundColor: '#9747FF',
                    transform: 'scale(0.98)',
                    color: 'white',
                  },
                }}
              >
                Locatarios
              </Link>
            </Box>
            <Box sx={{width: '40%'}}>
              <Link
                href="#"
                underline="none"
                sx={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: '#C4FF47',
                    borderRadius: '20px 20px 0 0',
                  },
                  '&:active': {
                    backgroundColor: '#9747FF',
                    transform: 'scale(0.98)',
                    color: 'white',
                    borderRadius: '20px',
                    top: '23px',
                    height: '55px',
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                }}
              >
                Propiedades
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '30%',
          }}
        >
          {/* NOTIFICACIONES */}

          <Box
            sx={{
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={bell} alt="" width={30} height={30} />
          </Box>
          <Box
            sx={{
              width: '70%',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>No Country</h2>

            <Box
              sx={{
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src={logo} alt="" width={40} height={40} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ContainerHeader>
  );
};
