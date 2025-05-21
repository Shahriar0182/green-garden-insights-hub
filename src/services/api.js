
import axios from 'axios';

// API URL for local development
const apiClient = axios.create({
  baseURL: '/api',  // This will use the proxy configured in vite.config.js
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tips API
export const getTips = async () => {
  try {
    const response = await apiClient.get('/tips');
    return response.data;
  } catch (error) {
    console.error('Error fetching tips:', error);
    throw error;
  }
};

export const getTipById = async (id) => {
  try {
    const response = await apiClient.get(`/tips/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tip ${id}:`, error);
    throw error;
  }
};

export const createTip = async (tipData) => {
  try {
    const response = await apiClient.post('/tips', tipData);
    return response.data;
  } catch (error) {
    console.error('Error creating tip:', error);
    throw error;
  }
};

// Users API
export const getUsers = async () => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await apiClient.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export default apiClient;
