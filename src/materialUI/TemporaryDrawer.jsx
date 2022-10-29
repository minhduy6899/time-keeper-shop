import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

export default function TemporaryDrawer({
  userLogin,
  logoutGoogle,
  loginGoogle,
  setOpenFormLogin,
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const dataMenu = [
    {
      title: 'Home',
      icon: <HomeOutlinedIcon />,
    },
    {
      title: 'Features',
      icon: <FeaturedPlayListOutlinedIcon />,
    },
    {
      title: 'Special',
      icon: <GradeOutlinedIcon />,
    },
    {
      title: 'Blog',
      icon: <BookOutlinedIcon />,
    },
    {
      title: 'Contact Us',
      icon: <AlternateEmailOutlinedIcon />,
    },
    {
      title: 'About Us',
      icon: <InfoOutlinedIcon />,
    },
  ];

  const dataUser = [
    {
      title: 'Sign Up',
      icon: <HowToRegOutlinedIcon />,
    },
    {
      title: 'Login',
      icon: <LoginOutlinedIcon />,
    },
    {
      title: 'Logout',
      icon: <LogoutOutlinedIcon />,
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {dataMenu.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            {userLogin ? (
              <>
                <img
                  style={{
                    width: '30px',
                    borderRadius: '9999px',
                    marginRight: '29px',
                  }}
                  src={userLogin.photoURL}
                  alt='avatar'
                />

                <ListItemText onClick={logoutGoogle} primary={'Logout'} />
              </>
            ) : (
              <>
                <ListItemIcon>
                  <LoginOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  onClick={() => setOpenFormLogin(true)}
                  primary={'Login'}
                />
              </>
            )}
          </ListItemButton>
        </ListItem>
        {userLogin ? (
          <></>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HowToRegOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={'Register'} />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'left'}>
        <IconButton
          onClick={toggleDrawer('left', true)}
          color='primary'
          aria-label='add to shopping cart'
        >
          <MenuIcon style={{ fontSize: '33px', color: 'white' }} />
        </IconButton>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
