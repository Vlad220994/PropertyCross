import {
  GET_PROPERTY_REQUEST,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_ERROR,
  REQUEST_PROPERTY
} from "../constants/getProperty";

export const getPropertyRequest = () => ({
  type: GET_PROPERTY_REQUEST
});

export const getPropertySuccess = property => ({
  type: GET_PROPERTY_SUCCESS,
  payload: property
});

export const getPropertyError = error => ({
  type: GET_PROPERTY_ERROR,
  payload: error
});

export const searchProperty = title => {
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
