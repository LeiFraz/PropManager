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

export const MovilNavbar = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };
  return (
    <AppBar position="relative" sx={{boxShadow: 'none'}}>
      <Toolbar sx={{display: {md: 'flex'}, justifyContent: {md: 'flex-end'}}}>
        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
          {pages.map(page => (
            <Button key={page} color="inherit">
              <Typography variant="body2">{page}</Typography>
            </Button>
          ))}
          <StyledAvatar />
        </Box>
        <Box sx={{display: {xs: 'flex', md: 'none'}}}>
          <MenuContainer>
            <IconButton onClick={openMenu}>
              <StyledIcon />
            </IconButton>
            <Menu
              open={Boolean(anchorNav)}
              onClose={closeMenu}
              sx={{display: {xs: 'flex', md: 'none'}}}
            >
              <StyledMenu>
                {pages.map(page => {
                  return (
                    <MenuItem sx={{color: 'white'}} key={page}>
                      {page}
                    </MenuItem>
                  );
                })}
              </StyledMenu>
            </Menu>
          </MenuContainer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
