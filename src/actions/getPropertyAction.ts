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

export const searchProperty = (title, id) => {
  const request = {
    url: id ? `/locations/${title}/properties/${id}` : `/locations/${title}/properties`,
    onStart: getPropertyRequest,
    onSuccess: id ? getBuildingSuccess : getPropertySuccess,
    onError: getPropertyError
  };

  return {
    type: REQUEST_PROPERTY,
    request
  };
};
