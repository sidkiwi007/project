import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};



const EVENTSAPI_URL = 'http://localhost:5000/api/events'; 

export const getEvents = async () => {
  const response = await axios.get(EVENTSAPI_URL);
  return response.data;
};

const DETAILSAPI_URL = 'http://localhost:5000/api/events';

export const getEventById = async (id) => {
  const response = await axios.get(`${DETAILSAPI_URL}/${id}`);
  return response.data
};