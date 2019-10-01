import * as React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from 'react-redux';

import { FAVORITE_PROPERTIES } from "../../constants/favoritesConstants";
import { searchProperty } from "../../actions/getPropertyAction";
import { addToFavoritesSuccess, removeFromFavoritesSuccess } from '../../actions/addToFavoritesAction';
import './propertyListingPage.scss';

const PropertyListingPage = (props) => {
  const { match, property, searchProperty } = props;
  
  const getData = JSON.parse(localStorage.getItem(FAVORITE_PROPERTIES)) || [];
  const newArr = getData.filter((item) => item.id === match.params.id);
  
  const mark = newArr.length ? "-" : "+";

  const [state, setstate] = useState(mark);

  useEffect(() => {
    searchProperty(match.params.city, match.params.id);
  }, []);

  const favoriteProperty = () => {
    if (state === "+") {
      setstate("-");
      addToFavoritesSuccess(
        match.params.city, 
        match.params.id, 
        property.title, 
        property.imgUrl, 
        property.priceFormatted
      );
    } else {
      setstate("+")
      removeFromFavoritesSuccess(match.params.id);
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
        <button type="button" className="btn btn-primary" onClick={favoriteProperty}>{state}</button>
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
  property: state.getPropertyReducer.getBuilding
});

const mapDispatchToProps = {
  searchProperty,
  addToFavoritesSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListingPage);
