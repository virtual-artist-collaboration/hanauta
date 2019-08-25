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

export const postRecording = async (
  recordingPath: string,
  params: {
    title: string;
    description: string;
  },
) => {
  const file = {
    uri: `file://${recordingPath}`,
    name: 'recording.aac',
    type: 'audio/aac',
  };
  const formData = new FormData();
  formData.append('user_name', 'naturalclar');
  formData.append('description', params.description);
  formData.append('title', params.title);
  formData.append('file', file);
  return postFormData('upload.php', formData);
};
