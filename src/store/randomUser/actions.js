/* eslint-disable no-undef */
import * as randomUserServices from 'services/randomUser';
import * as localStorage from 'helpers/localStorage';
import { History } from 'helpers';

import actionTypes from './actionTypes';

export const getRandomUsersSuccess = payload => ({
  type: actionTypes.GET_RANDOM_SUCCESS,
  payload: { ...payload },
});

export const getRandomUsers = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    const apiFetch = await randomUserServices.getRandomUsers(params, body);

    const { results, info } = apiFetch;

    if (results) {
      resolve(dispatch(getRandomUsersSuccess({ data: results, pagination: info  })));
    } else {
      reject(apiFetch.error);
    }
  });
};
