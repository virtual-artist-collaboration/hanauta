import axios from 'axios';

const host = 'https://virtual-artist-collaboration.herokuapp.com/';

export const api = (path: string, params: object) => {
  return axios(`${host}${path}`, params);
};

export const get = async (path: string, params?: object) => {
  return api(path, {
    method: 'GET',
    params,
  });
};

export const post = async (path: string, params?: object) => {
  return api(path, {
    method: 'POST',
    params,
  });
};

export const getList = async () => {
  return get('list_music.php');
};
