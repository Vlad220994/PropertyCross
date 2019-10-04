import {
  GET_PROPERTY_REQUEST,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_ERROR,
  GET_BUILDING_SUCCESS,
  REQUEST_PROPERTY
} from "../constants/getProperty";

export const getPropertyRequest = () => ({
  type: GET_PROPERTY_REQUEST
});

export const getPropertySuccess = property => ({
  type: GET_PROPERTY_SUCCESS,
  payload: property
});

export const getBuildingSuccess = property => ({
  type: GET_BUILDING_SUCCESS,
  payload: property
});

export const getPropertyError = error => ({
  type: GET_PROPERTY_ERROR,
  payload: error
});

export const searchProperties = (title, page) => {
  const request = {
    url: `/locations/${title}/properties?page=${page}`,
    onStart: getPropertyRequest,
    onSuccess: getPropertySuccess,
    onError: getPropertyError
  };

  return {
    type: REQUEST_PROPERTY,
    request
  };
};

export const searchPropertiesFromPagination = (title, page) => {
  const request = {
    url: `/locations/${title}/properties`,
    onStart: getPropertyRequest,
    onSuccess: getPropertySuccess,
    onError: getPropertyError
  };

  return {
    type: REQUEST_PROPERTY,
    request
  };
};

export const searchProperty = (title, id) => {
  const request = {
    url: `/locations/${title}/properties/${id}`,
    onStart: getPropertyRequest,
    onSuccess: getBuildingSuccess,
    onError: getPropertyError
  };

  return {
    type: REQUEST_PROPERTY,
    request
  };
};
