import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import 'react-slideshow-image/dist/styles.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {
  getAllProductsAction,
  getProductItemAction,
} from '../../actions/getAllProductsAction';
import { useParams } from 'react-router-dom';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from '@mui/material';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import './modalProductDetail.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height: '90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
var images = [];

function ModalProductDetail({ openModal }) {
  const { productsList, currentProduct } = useSelector(
    (reduxData) => reduxData.getAllProductsReducer
  );
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleOpen = async (paramProductId) => {
    dispatch(getProductItemAction(paramProductId));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setProduct('ALL');
  };

  const [age, setAge] = React.useState('');
  const [product, setProduct] = React.useState('ALL');

  let { productId } = useParams();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  React.useEffect(() => {
    dispatch(getAllProductsAction(12));
  }, []);

  React.useEffect(() => {
    setProduct(currentProduct);
    if (currentProduct != 'ALL' && productsList.length > 0) {
      createImage();
    }
  }, [currentProduct]);
  console.log('chekc currentProduct: ', currentProduct);
  const createImage = () => {
    if (currentProduct !== 'ALL' && productsList.length > 0) {
      const thumbnail1 = currentProduct.product.thumbnail[0].img1;
      const thumbnail2 = currentProduct.product.thumbnail[0].img2;
      const mainImg = currentProduct.product.thumbnail[0].img3;
      images = [
        {
          original: mainImg,
          originalClass: 'img-main',
          thumbnail: mainImg,
          originalHeight: '200px',
        },
        {
          original: thumbnail1,
          originalClass: 'img-main',
          thumbnail: thumbnail1,
          originalHeight: '200px',
        },
        {
          original: thumbnail2,
          originalClass: 'img-main',
          thumbnail: thumbnail2,
          originalHeight: '200px',
        },
      ];
    }
  };
  return (
    <div>
      {product !== 'ALL' && images.length > 0 && (
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          className='modal-view-product'
        >
          <Box sx={style} className='modal-container'>
            <div className='row row-modal'>
              <div className='col-sm-12 text-end'>
                <ClearOutlinedIcon
                  className='icon-close-modal'
                  onClick={() => handleClose()}
                />
              </div>
            </div>
            <div className='row row-modal product-info d-flex mx-auto'>
              <div className='col-md-6'>
                <ImageGallery items={images} />
              </div>
              <div className='col-md-6 d-flex flex-column justify-content-center'>
                <div className='catlinks'>
                  <span>
                    <a href='/#'>OUR SHOP,&nbsp;</a>
                  </span>
                  <span>
                    <a href='/#'>ACCESSORIES,&nbsp;</a>
                  </span>
                  <span>
                    <a href='/#'>MEN'S WATCHES</a>
                  </span>
                </div>
                <div className='product-title'>
                  <h1>{product.product.name}</h1>
                </div>
                <div className='product-rating'>
                  <Stack spacing={1}>
                    <Rating
                      name='half-rating'
                      defaultValue={3.5}
                      precision={0.5}
                    />
                  </Stack>
                </div>
                <div className='product-discription'>
                  <p>{product.product.description}</p>
                </div>
                <div className='product-price'>
                  <h3>${product.product.promotionPrice}.00</h3>
                </div>
                <div className='inp-group'>
                  <div className='product-type d-flex flex-wrap'>
                    <div className='product-size'>
                      <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id='demo-simple-select-helper-label'>
                          Size
                        </InputLabel>
                        <Select
                          labelId='demo-simple-select-helper-label'
                          id='demo-simple-select-helper'
                          value={age}
                          label='Size'
                          onChange={handleChange}
                        >
                          <MenuItem value=''>
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={28}>28 mm</MenuItem>
                          <MenuItem value={30}>30 mm</MenuItem>
                          <MenuItem value={35}>35 mm</MenuItem>
                          <MenuItem value={39}>39 mm</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className='product-color'>
                      <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id='demo-simple-select-helper-label'>
                          Color
                        </InputLabel>
                        <Select
                          labelId='demo-simple-select-helper-label'
                          id='demo-simple-select-helper'
                          value={age}
                          label='Color'
                          onChange={handleChange}
                        >
                          <MenuItem value=''>
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={28}>28 mm</MenuItem>
                          <MenuItem value={30}>30 mm</MenuItem>
                          <MenuItem value={35}>35 mm</MenuItem>
                          <MenuItem value={39}>39 mm</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className='product-quantity'>
                      <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <TextField
                          id='outlined-number'
                          label='Quantity'
                          type='number'
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className='product-qty-btn d-flex'>
                    <div className='product-button'>
                      <button type='button'>ADD TO CART</button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className='product-social'>
                  <FacebookOutlinedIcon className='icon-social' />
                  <InstagramIcon className='icon-social' />
                  <TwitterIcon className='icon-social' />
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default ModalProductDetail;
