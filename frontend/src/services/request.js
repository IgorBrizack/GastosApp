import axios from 'axios';

const verifyLocalStorage = () => {
  if (!localStorage.getItem('user')) {
    localStorage.setItem(
      'user',
      JSON.stringify({ name: '', token: '' }),
    );
  }
  const { token } = JSON.parse(localStorage.getItem('user'));
  return token;
};

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const getData = async (endpoint) => {
  const { data } = await api.get(endpoint, {
    headers: {
      Authorization: verifyLocalStorage(),
    },
  });
  return data;
};

export const postData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body, {
    headers: {
      Authorization: verifyLocalStorage(),
    },
  });
  return data;
};

export const deleteData = async (endpoint) => {
  const { data } = await api.delete(endpoint, {
    headers: {
      Authorization: verifyLocalStorage(),
    },
  });
  return data;
};

export const putData = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body, {
    headers: {
      Authorization: verifyLocalStorage(),
    },
  });
  return data;
};

export default api;
