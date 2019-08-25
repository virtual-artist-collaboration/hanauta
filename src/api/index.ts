import axios from 'axios';

const host = 'https://virtual-artist-collaboration.herokuapp.com/';

export const api = (path: string, params: object) => {
  return axios(`${host}/${path}`, params);
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

export const postFormData = async (path: string, params: object) => {
  return api(path, {
    method: 'POST',
    config: {headers: {'Content-Type': 'multipart/form-data'}},
    data: params,
  });
};

export const getList = async () => {
  return get('list_music.php');
};

export const postRecording = async (recordingPath: string) => {
  console.log(recordingPath);
  const file = {
    uri: `file://${recordingPath}`,
    name: 'recording.aac',
    type: 'audio/aac',
  };
  const formData = new FormData();
  formData.append('user_name', 'naturalclar');
  formData.append('description', '僕が考えた最高のリフ');
  formData.append('title', `最高のリフ${Math.floor(Math.random() * 100)}`);
  formData.append('file', file);
  return postFormData('upload.php', formData);
};
