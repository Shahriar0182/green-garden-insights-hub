
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_URL,
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

export default apiClient;
