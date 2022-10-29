import React, { useCallback } from 'react';
import { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import logoGoogle from '../../../assets/images/logoGoogle.png';
import './formLogin.scss';
import userSignin from '../../../assets/images/user.png';
import auth from '../../../firebase';

function FormLogin({
  setUserLogin,
  handleOpenFormLogin,
  handleCloseFormLogin,
  openFormLogin,
  setOpenFormLogin,
  display,
}) {
  const navigate = useNavigate();
  const [changeForm, setChangeForm] = useState('login');
  const [formData, updateFormData] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenuUser = Boolean(anchorEl);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleChangeForm = (e, form) => {
    e.preventDefault();
    setChangeForm(form);
  };

  const loginGoogle = useCallback(async (event) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const token = await auth?.currentUser?.getIdToken(true);
        if (token) {
          localStorage.setItem('@token', token);
          navigate('/');
        }
        setUserLogin(result);
        setOpenFormLogin(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const logoutGoogle = useCallback(() => {
    setAnchorEl(null);
    signOut(auth)
      .then(() => {
        setUserLogin(null);
        localStorage.removeItem('@token');
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div className='form-login'>
      <Button
        sx={{ display: display || 'block' }}
        className='btn-login'
        onClick={handleOpenFormLogin}
      >
        <img className='img-login' src={userSignin} alt='userLogin' />
      </Button>
      <Modal
        open={openFormLogin}
        onClose={handleCloseFormLogin}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='form-login-container'>
          <div className='form-login-content'>
            <div className='left'></div>
            {changeForm === 'register' ? (
              <form
                action='http://localhost:8002/customers'
                className='log-in'
                autoComplete='off'
                method='POST'
              >
                <h4 className='login-form-title'>
                  We are <span>TIME</span>
                </h4>
                <p className='login-form-description'>
                  Hi there! Let join with us.
                </p>
                <div className='d-flex'>
                  <div className='floating-label'>
                    <input
                      placeholder='Username'
                      type='email'
                      name='username'
                      id='email'
                      autoComplete='off'
                    />
                    <label htmlFor='email'>Username</label>
                  </div>
                  <div className='floating-label'>
                    <input
                      placeholder='Password'
                      type='password'
                      name='password'
                      id='password'
                      autoComplete='off'
                    />
                    <label htmlFor='password'>Password:</label>
                  </div>
                </div>
                <div className='floating-label'>
                  <input
                    placeholder='Fullname'
                    type='text'
                    name='fullName'
                    id='fullname'
                    autoComplete='off'
                  />
                  <label htmlFor='fullname'>Fullname:</label>
                </div>
                <div className='floating-label'>
                  <input
                    placeholder='Phone'
                    type='number'
                    name='phone'
                    id='phone'
                    autoComplete='off'
                  />
                  <label htmlFor='phone'>Phone:</label>
                </div>
                <div className='floating-label'>
                  <input
                    placeholder='Address'
                    type='text'
                    name='address'
                    id='address'
                    autoComplete='off'
                  />
                  <label htmlFor='address'>Address:</label>
                </div>
                <button type='submit' className='btn-login'>
                  Register
                </button>
                <div className='bottom d-flex justify-content-between align-items-center'>
                  <div className='btn-register'>
                    <button
                      className='btn btn-lg btn-dark'
                      onClick={(e) => handleChangeForm(e, 'login')}
                    >
                      Login
                    </button>
                  </div>
                  <div className='discrete' onClick={loginGoogle}>
                    <img src={logoGoogle} alt='logo google' />
                    Login with google
                  </div>
                </div>
              </form>
            ) : (
              <form
                action='http://localhost:8002/login'
                className='log-in'
                autoComplete='off'
                method='POST'
              >
                <h4 className='login-form-title'>
                  We are <span>TIME</span>
                </h4>
                <p className='login-form-description'>
                  Welcome back! Log in to your account to view today's clients:
                </p>
                <div className='floating-label'>
                  <input
                    placeholder='Email'
                    type='email'
                    name='username'
                    id='email'
                    autoComplete='off'
                  />
                  <label htmlFor='email'>Email:</label>
                </div>
                <div className='floating-label'>
                  <input
                    placeholder='Password'
                    type='password'
                    name='password'
                    id='password'
                    autoComplete='off'
                  />
                  <label htmlFor='password'>Password:</label>
                </div>
                <button type='submit' className='btn-login'>
                  Log in
                </button>
                <div className='bottom d-flex justify-content-between align-items-center'>
                  <div className='btn-register'>
                    <button
                      className='btn btn-dark btn-lg'
                      onClick={(e) => handleChangeForm(e, 'register')}
                    >
                      Register
                    </button>
                  </div>
                  <div className='discrete' onClick={loginGoogle}>
                    <img src={logoGoogle} alt='logo google' />
                    Login with google
                  </div>
                </div>
              </form>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default FormLogin;
