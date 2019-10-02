import * as React from 'react';
import { useEffect } from "react";
import { connect } from 'react-redux';

import { FavoriteProperty } from '../../components/FavoriteProperty/FavoriteProperty';
import { searchProperty } from "../../actions/getPropertyAction";
import { addToFavoritesSuccess, removeFromFavoritesSuccess } from '../../actions/addToFavoritesAction';
import './propertyListingPage.scss';

const PropertyListingPage = (props) => {
  const { match, property, search, addToFavorite, removeFromFavorite, favoriteArr } = props;
  
  const newArr = favoriteArr.filter((item) => item.id === match.params.id);
  const countNewArr = newArr.length;
  const mark = countNewArr ? "-" : "+";

  useEffect(() => {
    search(match.params.city, match.params.id);
  }, []);
 
  const favoriteProperty = () => {  
    if (countNewArr) {
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

  return(
    <FavoriteProperty favoriteProperty={favoriteProperty} property={property} mark={mark} />
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
