import * as React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from 'react-redux';

import { searchProperty } from "../../actions/getPropertyAction";
import { addToFavoritesSuccess, removeFromFavoritesSuccess } from '../../actions/addToFavoritesAction';
import './propertyListingPage.scss';

const PropertyListingPage = (props) => {
  const { match, property, search, addToFavorite, removeFromFavorite, favoriteArr } = props;
  
  const newArr = favoriteArr.filter((item) => item.id === match.params.id);
  
  const mark = newArr.length ? "-" : "+";

  useEffect(() => {
    search(match.params.city, match.params.id);
  }, []);
 
  const favoriteProperty = () => {  
    if (newArr.length) {
      removeFromFavorite(match.params.id);
    } else {
      addToFavorite(
        match.params.city, 
        match.params.id, 
        property.title, 
        property.imgUrl, 
        property.priceFormatted
      );
    }
  };

  const { 
    imgUrl, 
    bedroomNumber, 
    bathroomNumber, 
    priceFormatted, 
    title, 
    carSpaces, 
    propertyType, 
    listerName 
  } = property;

  return(
    <div className="property-listing-page">
      <header className="header-block">
        <Link to="/">
          <button type="button" className="btn btn-primary">Home</button>
        </Link>
        <div className="header-block__block1">Property Details</div>
        <button type="button" className="btn btn-primary" onClick={favoriteProperty}>{mark}</button>
      </header>
      <main className="main-block">
        <h2 className="main-block__heading">{title}</h2>
        <div className="image-block">
          <img src={imgUrl} alt={title} className="image-block__image" />
        </div>
        <p className="main-block__price">price: {priceFormatted}</p>
        <p className="main-block__bedRoom">bedroom number: {bedroomNumber}</p>
        <p className="main-block__bathRoom">bathroom number: {bathroomNumber}</p>
        <p className="main-block__carSpaces">car spaces: {carSpaces}</p>
        <p className="main-block__propertyType">property type: {propertyType}</p>
        <p className="main-block__listerName">lister name: {listerName}</p>
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  property: state.getPropertyReducer.getBuilding,
  favoriteArr: state.favoriteReducer.data
});

const mapDispatchToProps = {
  search: searchProperty,
  addToFavorite: addToFavoritesSuccess,
  removeFromFavorite: removeFromFavoritesSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListingPage);
