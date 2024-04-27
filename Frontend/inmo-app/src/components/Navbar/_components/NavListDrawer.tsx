import {CommonButton} from '@/components';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  styled,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import {logOut} from '@/services/auth';
import LogoutIcon from '@mui/icons-material/Logout';

interface NavItems {
  title: string;
  path: string;
  icon: React.ReactNode;
}

type NavListDrawerProps = {
  navList: NavItems[];
  auth: Boolean;
};

const ListContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '50%',
  gap: '10px',
});

export const NavListDrawer: React.FC<NavListDrawerProps> = ({
  auth,
  navList,
}) => {
  return (
    <ListContainer>
      <nav>
        <List>
          {navList.map(item => (
            <ListItem key={item.title} disablePadding>
              <Link
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  marginBottom: '50px',
                }}
                href={item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Typography variant="body2">{item.title}</Typography>
              </Link>
            </ListItem>
          ))}
        </List>
        {auth && (
          <IconButton onClick={() => logOut()}>
            <LogoutIcon sx={{color: 'white'}} />
            <Typography variant="body2">Cerrar Sesión</Typography>
          </IconButton>
        )}
      </nav>
    </ListContainer>
  );
};
