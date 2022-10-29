import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Slider,
  Box,
  TextField,
  Stack,
  Rating,
  dialogContentClasses,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import './shopFilter.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProductsAction,
  getProductItemAction,
  getProductsFilterAction,
} from '../../actions/getAllProductsAction';
import {
  changePagePagination,
  getProductsAction,
} from '../../actions/paginationAction';

function valuetext(price) {
  return `${price}°C`;
}
function calculatePrice(price) {
  return price * 1;
}

function ShopFilter({ getDataFilter }) {
  const { productsList, productsFilter } = useSelector(
    (reduxData) => reduxData.getAllProductsReducer
  );
  const { currentPage, products, noPage } = useSelector(
    (reduxData) => reduxData.pagiantionReducers
  );
  const dispatch = useDispatch();

  const [categoriesStatus, setCategoriesStatus] = React.useState({
    all: false,
    digital: false,
    men: false,
    women: false,
  });

  const [sizeStatus, setSizeStatus] = React.useState({
    mm28: false,
    mm29: false,
    mm32: false,
    mm35: false,
    mm39: false,
  });

  const [colorStatus, setColorStatus] = React.useState({
    black: false,
    blue: false,
    brown: false,
    white: false,
    pink: false,
  });

  const [dataFilter, setDataFilter] = useState({
    limit: 30,
    productName: 'ALL',
    promotionPrice: [0, 1000],

    productCategories: 'ALL',
    productColor: 'ALL',
    productSize: 'ALL',
    sortProducts: 'ALL',
  });
  const [price, setPrice] = React.useState([0, 1000]);

  const handleFilterName = (e) => {
    if (!e.target.value || e.target.value === '') {
      setDataFilter({
        ...dataFilter,
        productName: 'ALL',
      });
    } else {
      setDataFilter({
        ...dataFilter,
        productName: e.target.value,
      });
    }
    // getDataFilter(dataFilter);
    // dispatch(getProductsAction(dataFilter));
    // dispatch(getProductsAction(dataFilter));
  };

  const handleChangePrice = async (event, newValue) => {
    setPrice(newValue);
    setDataFilter({
      ...dataFilter,
      promotionPrice: newValue,
    });
    // getDataFilter(dataFilter);
  };

  const handleSelectFilterCategories = async (category, checked) => {
    if (checked) {
      setDataFilter({
        ...dataFilter,
        productCategories: category,
      });
    } else {
      setDataFilter({
        ...dataFilter,
        productCategories: 'ALL',
      });
    }

    // getDataFilter(dataFilter);
  };

  const handleSelectFilterSize = (size, checked) => {
    if (checked) {
      setDataFilter({
        ...dataFilter,
        productSize: size,
      });
    } else {
      setDataFilter({
        ...dataFilter,
        productSize: 'ALL',
      });
    }
  };
  const handleSelectFilterColor = (color, checked) => {
    if (checked) {
      setDataFilter({
        ...dataFilter,
        productColor: color,
      });
    } else {
      setDataFilter({
        ...dataFilter,
        productColor: 'ALL',
      });
    }
  };
  useEffect(() => {
    getDataFilter(dataFilter);
  }, [dataFilter]);

  return (
    <div className='shop-filter'>
      <div className='filter-title'>
        <h3>Filter products by</h3>
      </div>
      <div className='name-filter filter-item '>
        <Box sx={{ p: 2, borderRadius: 'sm', width: '100%' }}>
          <Typography
            id='filter-status'
            sx={{
              textTransform: 'uppercase',
              fontSize: '1.3rem',
              letterSpacing: 'lg',
              fontWeight: '600',
              color: 'text.secondary',
              mb: 2,
            }}
          >
            Name
          </Typography>
          <TextField
            id='outlined-basic'
            label='Product name'
            variant='outlined'
            fullWidth
            size='small'
            // onChange={handleFilterName}
            onKeyUp={handleFilterName}
            onKeyPress={handleFilterName}
          />
        </Box>
      </div>
      <div className='categories-filter filter-item'>
        <Sheet sx={{ p: 2, borderRadius: 'sm' }}>
          <Typography
            id='filter-status'
            sx={{
              textTransform: 'uppercase',
              fontSize: '1.3rem',
              letterSpacing: 'lg',
              fontWeight: '600',
              color: 'text.secondary',
              mb: 2,
            }}
          >
            Categories
          </Typography>
          <Box role='group' aria-labelledby='filter-status'>
            <List>
              <ListItem variant='soft' color='danger'>
                <Checkbox
                  label='All'
                  color='danger'
                  overlay
                  checked={categoriesStatus.all}
                  onChange={(e) => {
                    handleSelectFilterCategories('ALL', e.target.checked);
                    setCategoriesStatus({
                      digital: false,
                      men: false,
                      women: false,
                      all: e.target.checked,
                    });
                  }}
                  sx={{ color: 'inherit' }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  16
                </Typography>
              </ListItem>
              <ListItem variant='soft' color='danger'>
                <Checkbox
                  label='Automatic Watch'
                  color='danger'
                  overlay
                  checked={categoriesStatus.digital}
                  onChange={(e) => {
                    handleSelectFilterCategories('automatic', e.target.checked);
                    setCategoriesStatus({
                      all: false,
                      men: false,
                      women: false,
                      digital: e.target.checked,
                    });
                  }}
                  sx={{ color: 'inherit' }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  16
                </Typography>
              </ListItem>
              <ListItem
                variant='plain'
                color='warning'
                sx={{ borderRadius: 'sm' }}
              >
                <Checkbox
                  label="Men's Watches"
                  color='warning'
                  overlay
                  checked={categoriesStatus.men}
                  onChange={(e) => {
                    handleSelectFilterCategories('men', e.target.checked);
                    setCategoriesStatus({
                      all: false,
                      digital: false,
                      women: false,
                      men: e.target.checked,
                    });
                  }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  32
                </Typography>
              </ListItem>
              <ListItem variant='plain' sx={{ borderRadius: 'sm' }}>
                <Checkbox
                  label="Women's Watches"
                  color='neutral'
                  overlay
                  checked={categoriesStatus.women}
                  onChange={(e) => {
                    handleSelectFilterCategories('women', e.target.checked);
                    setCategoriesStatus({
                      all: false,
                      digital: false,
                      men: false,
                      women: e.target.checked,
                    });
                  }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  29
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Sheet>
      </div>
      <div className='price-filter filter-item '>
        <Box sx={{ p: 2, borderRadius: 'sm' }}>
          <Typography
            id='filter-status'
            sx={{
              textTransform: 'uppercase',
              fontSize: '1.3rem',
              letterSpacing: 'lg',
              fontWeight: '600',
              color: 'text.secondary',
              mb: 2,
            }}
          >
            Price
          </Typography>
          <Typography id='non-linear-slider' gutterBottom>
            USD: From {price[0]} $ to {price[1]} $
          </Typography>
          <Box>
            <Slider
              className='price-filter'
              min={0}
              step={10}
              max={1000}
              scale={calculatePrice}
              getAriaLabel={() => 'Temperature range'}
              value={price}
              onChange={handleChangePrice}
              valueLabelDisplay='auto'
              getAriaValueText={valuetext}
            />
          </Box>
        </Box>
      </div>
      <div className='size-filter filter-item '>
        <Sheet
          // variant="outlined"
          sx={{ p: 2, borderRadius: 'sm' }}
        >
          <Typography
            id='filter-status'
            sx={{
              textTransform: 'uppercase',
              fontSize: '1.3rem',
              letterSpacing: 'lg',
              fontWeight: '600',
              color: 'text.secondary',
              mb: 2,
            }}
          >
            Size
          </Typography>
          <Box role='group' aria-labelledby='filter-status'>
            <List>
              <ListItem variant='soft' color='danger'>
                <Checkbox
                  label='28 mm'
                  color='danger'
                  overlay
                  checked={sizeStatus.mm28}
                  onChange={(event) => {
                    setSizeStatus({
                      mm29: false,
                      mm32: false,
                      mm35: false,
                      mm39: false,
                      mm28: event.target.checked,
                    });
                    handleSelectFilterSize('28mm', event.target.checked);
                  }}
                  sx={{ color: 'inherit' }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  11
                </Typography>
              </ListItem>
              <ListItem
                variant='plain'
                color='warning'
                sx={{ borderRadius: 'sm' }}
              >
                <Checkbox
                  label='29 mm'
                  color='warning'
                  overlay
                  checked={sizeStatus.mm29}
                  onChange={(event) => {
                    setSizeStatus({
                      mm28: false,
                      mm32: false,
                      mm35: false,
                      mm39: false,
                      mm29: event.target.checked,
                    });
                    handleSelectFilterSize('29mm', event.target.checked);
                  }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  19
                </Typography>
              </ListItem>

              <ListItem
                variant='plain'
                color='warning'
                sx={{ borderRadius: 'sm' }}
              >
                <Checkbox
                  label='32 mm'
                  color='warning'
                  overlay
                  checked={sizeStatus.mm32}
                  onChange={(event) => {
                    setSizeStatus({
                      mm28: false,
                      mm29: false,
                      mm35: false,
                      mm39: false,
                      mm32: event.target.checked,
                    });
                    handleSelectFilterSize('32mm', event.target.checked);
                  }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  15
                </Typography>
              </ListItem>
              <ListItem
                variant='plain'
                color='warning'
                sx={{ borderRadius: 'sm' }}
              >
                <Checkbox
                  label='35 mm'
                  color='warning'
                  overlay
                  checked={sizeStatus.mm35}
                  onChange={(event) => {
                    setSizeStatus({
                      mm28: false,
                      mm29: false,
                      mm32: false,
                      mm39: false,
                      mm35: event.target.checked,
                    });
                    handleSelectFilterSize('35mm', event.target.checked);
                  }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  15
                </Typography>
              </ListItem>
              <ListItem
                variant='plain'
                color='warning'
                sx={{ borderRadius: 'sm' }}
              >
                <Checkbox
                  label='39 mm'
                  color='warning'
                  overlay
                  checked={sizeStatus.mm39}
                  onChange={(event) => {
                    setSizeStatus({
                      mm28: false,
                      mm29: false,
                      mm32: false,
                      mm35: false,
                      mm39: event.target.checked,
                    });
                    handleSelectFilterSize('39mm', event.target.checked);
                  }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  15
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Sheet>
      </div>
      <div className='color-filter filter-item '>
        <Sheet
          // variant="outlined"
          sx={{ p: 2, borderRadius: 'sm' }}
        >
          <Typography
            id='filter-status'
            sx={{
              textTransform: 'uppercase',
              fontSize: '1.3rem',
              letterSpacing: 'lg',
              fontWeight: '600',
              color: 'text.secondary',
              mb: 2,
            }}
          >
            Color
          </Typography>
          <Box role='group' aria-labelledby='filter-status'>
            <List>
              <ListItem variant='soft' color='danger'>
                <Checkbox
                  label='Black'
                  overlay
                  checked={colorStatus.black}
                  onChange={(event) => {
                    setColorStatus({
                      blue: false,
                      brown: false,
                      white: false,
                      pink: false,
                      black: event.target.checked,
                    });
                    handleSelectFilterColor('black', event.target.checked);
                  }}
                  sx={{ color: 'inherit' }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  39
                </Typography>
              </ListItem>
              <ListItem variant='soft' color='danger'>
                <Checkbox
                  label='Blue'
                  color='danger'
                  overlay
                  checked={colorStatus.blue}
                  onChange={(event) => {
                    setColorStatus({
                      black: false,
                      brown: false,
                      white: false,
                      pink: false,
                      blue: event.target.checked,
                    });
                    handleSelectFilterColor('blue', event.target.checked);
                  }}
                  sx={{ color: 'inherit' }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  11
                </Typography>
              </ListItem>
              <ListItem
                variant='plain'
                color='warning'
                sx={{ borderRadius: 'sm' }}
              >
                <Checkbox
                  label='White'
                  color='warning'
                  overlay
                  checked={colorStatus.white}
                  onChange={(event) => {
                    setColorStatus({
                      black: false,
                      blue: false,
                      brown: false,
                      pink: false,
                      white: event.target.checked,
                    });
                    handleSelectFilterColor('white', event.target.checked);
                  }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  16
                </Typography>
              </ListItem>
              <ListItem variant='plain' sx={{ borderRadius: 'sm' }}>
                <Checkbox
                  label='Gold'
                  color='neutral'
                  overlay
                  checked={colorStatus.brown}
                  onChange={(event) => {
                    setColorStatus({
                      black: false,
                      blue: false,
                      white: false,
                      pink: false,
                      brown: event.target.checked,
                    });
                    handleSelectFilterColor('brown', event.target.checked);
                  }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  21
                </Typography>
              </ListItem>
              <ListItem variant='plain' sx={{ borderRadius: 'sm' }}>
                <Checkbox
                  label='Pink'
                  color='neutral'
                  overlay
                  checked={colorStatus.pink}
                  onChange={(event) => {
                    setColorStatus({
                      black: false,
                      blue: false,
                      brown: false,
                      white: false,
                      pink: event.target.checked,
                    });
                    handleSelectFilterColor('pink', event.target.checked);
                  }}
                />
                <Typography textColor='inherit' sx={{ ml: 'auto' }}>
                  21
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Sheet>
      </div>
    </div>
  );
}

export default ShopFilter;
