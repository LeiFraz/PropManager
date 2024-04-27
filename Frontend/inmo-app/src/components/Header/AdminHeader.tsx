import React, {useState} from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  styled,
  Container,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import logo from '/public/img/logo.png';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {logOut} from '@/services/auth';
import {UserGreetings} from '@/components';
import {useRouter} from 'next/router';

const NavContainer = styled(AppBar)({
  display: 'flex',
  right: 0,
  height: '130px',
  width: '100%',
});

const RightContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: 0,
  width: '100%',
  alignItems: 'center',
});

const TagsContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  margin: '0 0 0 100px',
  gap: '20px',
  width: 'auto',
  height: '50%',
  padding: 0,
});

const StyledTag = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '15%',
  height: '100%',
  borderRadius: '30px 30px 0 0',
});

type AdminHeaderProps = {
  auth?: Boolean;
};

export const AdminHeader: React.FC<AdminHeaderProps> = ({auth}) => {
  const router = useRouter();
  const [anchorElLocatarios, setAnchorElLocatarios] =
    useState<null | HTMLElement>(null);
  const [anchorElPropiedades, setAnchorElPropiedades] =
    useState<null | HTMLElement>(null);

  const handleMenuClickLocatarios = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElLocatarios(event.currentTarget);
  };

  const handleMenuCloseLocatarios = () => {
    setAnchorElLocatarios(null);
  };

  const handleMenuClickPropiedades = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorElPropiedades(event.currentTarget);
  };

  const handleMenuClosePropiedades = () => {
    setAnchorElPropiedades(null);
  };

  return (
    <NavContainer position="static">
      <Toolbar sx={{padding: 0}}>
        <IconButton
          onClick={() => router.push('/')}
          sx={{
            display: 'flex',
            padding: '20',
            width: '30%',
            position: 'absolute',
          }}
        >
          <Image
            alt="logo"
            style={{width: '50px', height: '50px'}}
            src={logo}
          />
          <Typography variant="body2">No Country</Typography>
        </IconButton>
        <RightContainer>
          <UserGreetings sx={{margin: '20px'}} />
          {auth && (
            <IconButton
              sx={{':hover': {backgroundColor: '#9747ff'}}}
              onClick={() => logOut()}
            >
              <LogoutIcon
                sx={{color: 'white', width: '30px', height: '30px'}}
              />
              <Typography variant="body2">Cerrar Sesión</Typography>
            </IconButton>
          )}
        </RightContainer>
      </Toolbar>
      <TagsContainer>
        <StyledTag sx={{backgroundColor: '#9747ff'}}>
          <IconButton onClick={handleMenuClickLocatarios}>
            <Typography variant="body2">Locatarios</Typography>
          </IconButton>
          <Menu
            anchorEl={anchorElLocatarios}
            open={Boolean(anchorElLocatarios)}
            onClose={handleMenuCloseLocatarios}
          >
            <MenuItem onClick={() => router.push('/')}>Crear usuario</MenuItem>
            <MenuItem
              onClick={() => router.push('/admin/locatarios/asignar-servicio')}
            >
              Asignar Servicio
            </MenuItem>
            <MenuItem
              onClick={() => router.push('/admin/locatarios/crear-contrato')}
            >
              Crear Contrato
            </MenuItem>
            <MenuItem
              onClick={() => router.push('/admin/locatarios/lista-contratos')}
            >
              Lista de contratos
            </MenuItem>
          </Menu>
        </StyledTag>
        <StyledTag sx={{backgroundColor: '#9747ff'}}>
          <IconButton onClick={handleMenuClickPropiedades}>
            <Typography variant="body2">Propiedades</Typography>
          </IconButton>
          <Menu
            anchorEl={anchorElPropiedades}
            open={Boolean(anchorElPropiedades)}
            onClose={handleMenuClosePropiedades}
          >
            <MenuItem
              onClick={() => router.push('/admin/propiedades/crear-propiedad')}
            >
              Crear Propiedad
            </MenuItem>
          </Menu>
        </StyledTag>
      </TagsContainer>
    </NavContainer>
  );
};
