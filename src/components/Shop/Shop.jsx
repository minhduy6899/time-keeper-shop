import React, { useCallback, useState, memo } from 'react';

import './shop.scss';
import ShopFilter from './ShopFilter';
import ProductsList from './ProductsList';

function Shop() {
  const [dataFilter, setDataFilter] = useState({
    limit: 30,
    productName: 'ALL',
    promotionPrice: [0, 1000],

    productCategories: 'ALL',
    productColor: 'ALL',
    productSize: 'ALL',
    sortProducts: 'ALL',
  });

  const getDataFilter = useCallback(
    (childData) => {
      setDataFilter(childData);
    },
    [dataFilter]
  );
  return (
    <div className='row shop'>
      <div className='col-sm-3 mb-3'>
        <ShopFilter getDataFilter={getDataFilter} />
      </div>
      <div className='col-sm-9 shop-products'>
        <ProductsList dataFilter={dataFilter} getDataFilter={getDataFilter} />
      </div>
    </div>
  );
}

export default Shop;
