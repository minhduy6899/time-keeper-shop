import React from 'react';
import { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import auth from '../../../firebase';
import { useNavigate } from 'react-router-dom';

import './formSignin.scss';

const provider = new GoogleAuthProvider();

function FormSignin() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logoutGoogle = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (result) => {
      if (result) {
        setUser(result);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className='login-page'>
      <div className='form'>
        <form className='register-form'>
          <input type='text' placeholder='name' />
          <input type='password' placeholder='password' />
          <input type='text' placeholder='email address' />
          <button>create</button>
          <p className='message'>
            Already registered? <a href='/#'>Sign In</a>
          </p>
        </form>
        <form className='login-form'>
          <input type='text' placeholder='username' />
          <input type='password' placeholder='password' />
          <button>login</button>
          <hr />

          <button className='loginGoogle' onClick={loginGoogle}>
            Sign in with Google
          </button>

          <p className='message'>
            Not registered? <a href='/#'>Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default FormSignin;
