import React from 'react';
import { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Box,
  Stack,
  Rating,
  Pagination,
} from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import './productsList.scss';
import { getProductItemAction } from '../../actions/getAllProductsAction';
import ModalProductDetail from '../Modal/ModalProductDetail';
import {
  changePagePagination,
  getProductsAction,
} from '../../actions/paginationAction';
import ProductCard from '../../components/ProductCard/ProductCard';

function ProductsList({ dataFilter, getDataFilter }) {
  const dispatch = useDispatch();

  const { currentPage, products, noPage } = useSelector(
    (reduxData) => reduxData.pagiantionReducers
  );
  const changePageHandler = (event, value) => {
    dispatch(changePagePagination(value));
  };

  const [productsFiltered, setProductsFiltered] = useState(false);
  const [sort, setSort] = React.useState('');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    dispatch(
      getProductsAction({
        limit: 30,
        productName: 'ALL',
        promotionPrice: [0, 1000],

        productCategories: 'ALL',
        productColor: 'ALL',
        productSize: 'ALL',
        sortProducts: 'ALL',
      })
    );
  }, []);

  React.useEffect(() => {
    const fetchProduct = () => {
      dispatch(getProductsAction(dataFilter));
    };
    fetchProduct();
  }, [productsFiltered, noPage, currentPage, dataFilter]);

  const handleChangeSort = (event) => {
    console.log('check sortxxxxxxxx: ', event.target.value);
    setSort(event.target.value);
    getDataFilter({
      ...dataFilter,
      sortProducts: event.target.value,
    });
  };

  const handleOpenModal = async (productId) => {
    dispatch(getProductItemAction(productId));
    setOpen(true);
  };

  return (
    <>
      <div className='product-layout'>
        <div className='btn-view-type'>
          <ViewModuleIcon className='icon-view-type' />
          <FormatListBulletedIcon className='icon-view-type' />
        </div>

        <div className='product-layout-sort'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size='small'>
              <InputLabel id='demo-simple-select-label'>Sort</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={sort}
                label='Sort'
                onChange={(e) => handleChangeSort(e)}
              >
                <MenuItem value={'ALL'}>None</MenuItem>
                <MenuItem value={'name'}>Name</MenuItem>
                <MenuItem value={'price'}>Price</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className='product-list'>
        {products.length > 0 ? (
          products.map((item, index) => (
            <ProductCard
              item={item}
              index={index}
              link={'/products/'}
              handleOpen={handleOpenModal}
            />
          ))
        ) : (
          <Grid container mt={19} mb={19} justifyContent='center'>
            <Grid item>
              <h1 className='text-center'>Sorry! No products matched.</h1>
            </Grid>
          </Grid>
        )}
        {products.length > 0 ? (
          <Grid container mt={3} mb={3} justifyContent='center'>
            <Grid item>
              <Pagination
                color='warning'
                size='large'
                count={noPage}
                defaultPage={1}
                onChange={changePageHandler}
                showFirstButton
                showLastButton
              />
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </div>

      <ModalProductDetail openModal={open} />
    </>
  );
}

export default memo(ProductsList);
