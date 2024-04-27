import {
  IconButton,
  Drawer,
  Typography,
  styled,
  AppBar,
  Toolbar,
  Theme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';
import {themeDark} from '@/theme';
import Link from 'next/link';
import {NavListDrawer} from './_components/NavListDrawer';
import ReportIcon from '@mui/icons-material/Report';
import TodayIcon from '@mui/icons-material/Today';
import {useRouter} from 'next/router';
import {logOut} from '@/services/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import {UserGreetings} from '../UserGreetings/UserGreetings';

const pages = [
  {
    title: 'Nuevo Reporte',
    path: '/user/reports/new-report',
    icon: <ReportIcon sx={{color: 'white'}} />,
  },
  {
    title: 'Tus Reportes',
    path: '/user/reports/my-reports',
    icon: <TodayIcon sx={{color: 'white'}} />,
  },
];

type NavbarProps = {
  auth: Boolean;
};

const MenuContainer = styled(IconButton)({
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
    width: '44px',
    height: '45px',
  },
});

export const Navbar: React.FC<NavbarProps> = ({auth}) => {
  const smUp = useMediaQuery<Theme>(theme => themeDark.breakpoints.up('sm'));
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <AppBar sx={{boxShadow: 'none'}} position="static">
        <Toolbar sx={{gap: '20px'}}>
          {!smUp && (
            <MenuContainer onClick={handleClick}>
              <StyledIcon />
            </MenuContainer>
          )}
          <Link href="/" style={{textDecoration: 'none', flexGrow: 1}}>
            <Typography variant="body2">No Country</Typography>
          </Link>
          <UserGreetings />
          {smUp && pages && (
            <>
              {pages.map(page => (
                <Link
                  href={page.path}
                  key={page.title}
                  style={{textDecoration: 'none'}}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      borderRadius: '15px',
                      padding: '3px',
                      backgroundColor:
                        currentPath === page.path ? '#9747ff' : 'inherit',
                    }}
                  >
                    {page.title}
                  </Typography>
                </Link>
              ))}
            </>
          )}
          {smUp && auth && (
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
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{display: 'flex', alignItems: 'center'}}
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer auth={auth} navList={pages} />
      </Drawer>
    </>
  );
};
