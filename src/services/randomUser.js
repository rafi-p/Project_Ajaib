import { Endpoints } from 'constant';
import { customFetch } from 'helpers';
import { LocalStorage } from 'helpers';
import Moment from 'moment';
const user = LocalStorage.getUserStorage();

export const getRandomUsers = async(params, data) => {
  const setData = cats => {
    let newArr = cats.map((cat, i) => {

      return {
        username: cat.login.username,
        name: cat.name.first + ' ' + cat.name.last,
        email: cat.email,
        gender: cat.gender,
        registered: Moment(cat.registered.date).format('DD-MM-YYYY hh:mm'),
      };
    });
    return newArr;
    // return cats;
  };

  try {
    const uri = params
    ? `?page=${params.page ? params.page : ''}&results=${params.results ? params.results : ''}&seed=${params.seed ? params.seed : ''}&gender=${params.gender ? params.gender : ''}`
    : '';
    const response = await customFetch(`${Endpoints.url}/${uri}`, 'GET', data, false);
    // const response = await customFetch(`${Endpoints.url}${Endpoints.param.filterBrand}`, 'GET', data, false);
    const res = await response.json();

    if (res.results) {
      res.results = setData(res.results);
    } else {
      res.results = {};
    }
    return res;
  } catch (error) {
    throw error;
  }
};

export const getBrandByCode = async(params, data) => {

  try {
    const { code } = params;
    const response = await customFetch(`${Endpoints.url}${Endpoints.param.jubelioBrand}/${code}`, 'GET', data, false);
    const res = await response.json();

    if (res.data) {
      res.data = res.data;
    } else {
      res.data = {};
    }
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateBrand = async(params, data) => {

  try {
    const { code } = params;
    const response = await customFetch(`${Endpoints.url}${Endpoints.param.jubelioBrand}/${code}`, 'PUT', data, false);
    const res = await response.json();

    if (res.data) {
      res.data = res.data;
    } else {
      res.data = {};
    }
    return res;
  } catch (error) {
    throw error;
  }
};
