import React from 'react';
import { Link } from 'react-router-dom';
import ScrollTop from '../ScrollTop/ScrollTop';

import './breadCrumb.scss';

function BreadCrumb({ title, breadCrumd, linkTo }) {
  return (
    <>
      <div className="title-page">
        <div className="bg-title-page"></div>
        <nav data-depth="3" className="breadcrumb">
          <div className="breadcrumb-container">
            <div className="title text-center">
              <h3>{title}</h3>
            </div>

            <ul itemScope="" itemType="http://schema.org/BreadcrumbList">
              {breadCrumd.map((item, index) => (
                <li
                  key={index}
                  itemProp="itemListElement"
                  itemScope=""
                  itemType="http://schema.org/ListItem"
                >
                  <span itemProp="name">
                    <Link to={item.url}>&nbsp;{item.title} </Link>
                  </span>
                  <meta itemProp="position" content="1" />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <ScrollTop />
    </>
  );
}

export default BreadCrumb;
