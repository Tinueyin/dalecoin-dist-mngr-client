import axios from 'axios';

let baseUrl;
if (
  window.location.host.includes('127.0.0.1') ||
  window.location.host.includes('localhost')
) {
  baseUrl = 'http://0.0.0.0:5000';
} else {
  baseUrl = 'http://dalecoin-backend:3000/api/v1/';
}

export const submitEmail = async (email) => {
  const response = await axios.post(`${baseUrl}/magic-link`, { email, url:window.location.href });
  console.log(response)
  return response.json();
};

export const verifyToken = async (token) => {
  const response = await axios.post(`${baseUrl}/auth`, { token });
  console.log(response)
  return response;
};

