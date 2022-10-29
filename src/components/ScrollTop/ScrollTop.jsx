import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from '@mui/material';

import './scrollTop.scss';

const ScrollTop = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showGoToTop && (
        <div className="btn-scrollTop" onClick={scrollToTop}>
          <ArrowUpwardIcon className="icon-up" />
        </div>
      )}
    </>
  );
};

export default ScrollTop;
