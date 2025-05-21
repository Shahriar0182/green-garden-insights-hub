
// API URL for local development
const API_URL = '/api';  // This will use the proxy configured in vite.config.js

// Helper function for fetch requests
const fetchWithErrorHandling = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error during fetch to ${url}:`, error);
    throw error;
  }
};

// Tips API
export const getTips = async () => {
  return fetchWithErrorHandling(`${API_URL}/tips`);
};

export const getTipById = async (id) => {
  return fetchWithErrorHandling(`${API_URL}/tips/${id}`);
};

export const createTip = async (tipData) => {
  return fetchWithErrorHandling(`${API_URL}/tips`, {
    method: 'POST',
    body: JSON.stringify(tipData),
  });
};

export const updateTip = async (id, tipData) => {
  return fetchWithErrorHandling(`${API_URL}/tips/${id}`, {
    method: 'PUT',
    body: JSON.stringify(tipData),
  });
};

export const deleteTip = async (id) => {
  return fetchWithErrorHandling(`${API_URL}/tips/${id}`, {
    method: 'DELETE',
  });
};

// Users API
export const getUsers = async () => {
  return fetchWithErrorHandling(`${API_URL}/users`);
};

export const getUserById = async (id) => {
  return fetchWithErrorHandling(`${API_URL}/users/${id}`);
};

export const createUser = async (userData) => {
  return fetchWithErrorHandling(`${API_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

export const updateUser = async (id, userData) => {
  return fetchWithErrorHandling(`${API_URL}/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
  });
};

export const deleteUser = async (id) => {
  return fetchWithErrorHandling(`${API_URL}/users/${id}`, {
    method: 'DELETE',
  });
};
