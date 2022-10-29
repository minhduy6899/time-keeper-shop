import React, { useState, useEffect, useCallback } from 'react';
import {
  AppBar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Badge,
  Button,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/system';
import TemporaryDrawer from '../../../materialUI/TemporaryDrawer';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

import phone from '../../../assets/images/phone.png';
import cart from '../../../assets/images/cart.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from '../../../../node_modules/firebase/auth';
import auth from '../../../firebase';

import './header.scss';
import FormLogin from '../../Form/FormLogin/FormLogin';
import logoBlack from '../../../assets/images/logo.png';
import logoWhite from '../../../assets/images/logo2.png';
import ModalCartList from '../../Modal/ModalCartList';

function Header() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [userLogin, setUserLogin] = useState(null);
  const [openFormLogin, setOpenFormLogin] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenuUser = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleOpenFormLogin = () => setOpenFormLogin(true);
  const handleCloseFormLogin = () => setOpenFormLogin(false);

  let Quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  let Price = cartItems
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenMenuUser = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logoutGoogle = useCallback(() => {
    setAnchorEl(null);
    signOut(auth)
      .then(() => {
        setUserLogin(null);
        setOpenFormLogin(false);
        localStorage.removeItem('@token');
      })
      .catch((error) => {
        console.error(error);
      });
  });

  useEffect(() => {
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setUserLogin(result);
      } else {
        setUserLogin(null);
      }
    });
  }, [userLogin]);

  const [open, setOpen] = useState(false);
  const [eur, setEur] = React.useState('');
  const [language, setLanguage] = React.useState('');

  const handleChangeEur = (event) => {
    setEur(event.target.value);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <header>
      {/* PC - tablet */}
      <div className='desktop-screen'>
        <AppBar
          position='sticky'
          className='nav-top'
          style={{ background: '#ffffff' }}
        >
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs={4}>
              <Typography
                sx={{
                  mx: 3,
                  my: 3,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Link to='/'>
                  <img
                    className='logo img-responsive'
                    src='image/logo/logoBlack.png'
                    srcSet={logoBlack}
                    alt='SP Time'
                  />
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Stack
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
              >
                <Box>
                  <FormControl sx={{ m: 1, minWidth: 90 }} size='small'>
                    <InputLabel
                      fontSize='10px'
                      id='demo-simple-select-label'
                      style={{ fontFamily: 'montserrat', fontSize: '14px' }}
                    >
                      EUR
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={eur}
                      label='Age'
                      onChange={handleChangeEur}
                      style={{
                        boxShadow:
                          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                      }}
                    >
                      <MenuItem value={10}>USD</MenuItem>
                      <MenuItem value={20}>EUR</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl sx={{ m: 1, minWidth: 90 }} size='small'>
                    <InputLabel
                      fontSize='10px'
                      id='demo-simple-select-label'
                      style={{ fontFamily: 'montserrat', fontSize: '14px' }}
                    >
                      LAN
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={language}
                      label='Age'
                      onChange={handleChangeLanguage}
                      style={{
                        boxShadow:
                          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                      }}
                    >
                      <MenuItem value={10}>English</MenuItem>
                      <MenuItem value={20}>Tiếng việt</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={5}>
              <Stack
                flexDirection='row'
                alignItems='center'
                justifyContent='space-evenly'
              >
                <Stack
                  flexDirection='row'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Box
                    sx={{
                      mr: 2,
                      my: 3,
                      display: { xs: 'none', md: 'flex' },
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    <img src={phone} alt='phone' />
                  </Box>
                  <Box>
                    {' '}
                    <Typography
                      color='initial'
                      fontSize='16px'
                      fontFamily='philosopher'
                    >
                      Call us free
                    </Typography>
                    <Typography
                      color='#cf9e18'
                      fontSize='18px'
                      fontWeight='700'
                      fontFamily='philosopher'
                    >
                      1-888-546-789
                    </Typography>
                  </Box>
                </Stack>

                <div className='cart-container'>
                  <Link to='/cart'>
                    <Stack
                      className='cart-heading'
                      flexDirection='row'
                      justifyContent='center'
                      alignItems='center'
                      sx={{
                        textDecoration: 'none',
                      }}
                    >
                      <Box
                        sx={{
                          mr: 2,
                          my: 3,
                          display: { xs: 'none', md: 'flex' },
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >
                        <Badge badgeContent={Quantity} color='warning'>
                          <img src={cart} alt='cart' />
                        </Badge>
                      </Box>
                      <Box>
                        <Typography
                          color='initial'
                          fontSize='16px'
                          fontFamily='philosopher'
                        >
                          Your cart
                        </Typography>
                        <Typography
                          color='#cf9e18'
                          fontSize='18px'
                          fontWeight='700'
                          fontFamily='philosopher'
                        >
                          <span>$</span>
                          {Price}.00
                        </Typography>
                      </Box>
                    </Stack>
                  </Link>
                  <div className='cart-modal'>
                    <ModalCartList />
                  </div>
                </div>
                <Stack>
                  <Stack
                    flexDirection='row'
                    alignItems='center'
                    sx={{
                      textDecoration: 'none',
                    }}
                  >
                    {userLogin ? (
                      <>
                        <Box
                          component='span'
                          sx={{
                            display: { xs: 'none', md: 'flex' },
                            color: 'inherit',
                            textDecoration: 'none',
                            width: '40px',
                          }}
                        >
                          <img
                            style={{
                              borderRadius: '9999px',
                            }}
                            src={userLogin.photoURL}
                            alt='avatar user'
                          />
                        </Box>
                        <Button
                          id='basic-button'
                          className='btn-expand-menu'
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup='true'
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleOpenMenuUser}
                        >
                          <KeyboardArrowDownOutlinedIcon className='arrow-down' />
                        </Button>
                        <Menu
                          id='basic-menu'
                          className='menu-user-content'
                          anchorEl={anchorEl}
                          open={openMenuUser}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                          sx={{ top: '10px', right: '20px' }}
                        >
                          <MenuItem onClick={handleClose}>
                            <img
                              style={{
                                borderRadius: '9999px',
                                width: '30px',
                              }}
                              src={userLogin.photoURL}
                              alt='avatar user'
                            />
                            &nbsp;
                            {userLogin.displayName}
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <SettingsIcon />
                            &nbsp; Setting
                          </MenuItem>
                          <MenuItem onClick={logoutGoogle}>
                            <LogoutIcon />
                            &nbsp; Logout
                          </MenuItem>
                        </Menu>
                      </>
                    ) : (
                      <Box
                        component='span'
                        sx={{
                          mr: 2,
                          my: 3,
                          display: { xs: 'none', md: 'flex' },
                          color: 'inherit',
                          textDecoration: 'none',
                          width: '36px',
                        }}
                      >
                        <FormLogin
                          setUserLogin={setUserLogin}
                          handleOpenFormLogin={handleOpenFormLogin}
                          openFormLogin={openFormLogin}
                          setOpenFormLogin={setOpenFormLogin}
                        />
                      </Box>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Menu
            id='demo-positioned-menu'
            aria-labelledby='demo-positioned-button'
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </AppBar>

        <nav className='nav-bottom navbar navbar-expand-lg bg-dark'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler text-light bg-light'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='nav-list justify-content-between flex-wrap collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav justify-content-evenly mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item nav-link-shop'>
                  <Link className='nav-link ' to='/products'>
                    Shop
                  </Link>
                </li>
                <li className='nav-item dropdown nav-link-dropdown'>
                  <Link
                    className='nav-link dropdown-toggle'
                    to='/products'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                    aria-current='page'
                  ></Link>

                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item' to='/'>
                        Men Watch
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='/'>
                        Women Watch
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider'></hr>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='/'>
                        Digital Watch
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link ' to='/'>
                    Specials
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/blog'>
                    Blog
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/contact'>
                    Contact Us
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/about'>
                    About US
                  </Link>
                </li>
              </ul>
              <form className='d-flex' role='search'>
                <div className='search__container'>
                  <input
                    className='search__input'
                    type='text'
                    placeholder='Search products'
                  />
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile */}
      <div className='mobile-screen'>
        <div className='header-top-mobile d-flex justify-content-between align-items-center py-3 px-3'>
          <div className='header-icon-menu'>
            <TemporaryDrawer
              userLogin={userLogin}
              logoutGoogle={logoutGoogle}
              setOpenFormLogin={setOpenFormLogin}
            />
          </div>
          <div className='header-logo'>
            <img
              style={{ width: '90px' }}
              src='image/logo/logoWhite.png'
              srcSet={logoWhite}
              alt='SP Time'
            />
          </div>
          <div className='header-cart'>
            <ShoppingCartOutlinedIcon
              style={{ fontSize: '33px', color: 'white' }}
            />
          </div>
        </div>
        <div className='header-bottom-mobile d-flex align-items-center'>
          <form className='search-form'>
            <input
              type='search'
              placeholder='Search'
              className='search-input'
            />
            <button type='submit' className='search-button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#000000'
                viewBox='0 0 30 30'
                width='30px'
                height='30px'
              >
                <path d='M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z' />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
