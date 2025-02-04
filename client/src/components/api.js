import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getTransactions = (month, search = '', page = 1, perPage = 10) => {
  return axios.get(`${API_BASE_URL}/transactions`, {
    params: { month, search, page, perPage },
  });
};

export const getStatistics = (month) => {
  return axios.get(`${API_BASE_URL}/statistics/${month}`);
};

export const getBarChartData = (month) => {
  return axios.get(`${API_BASE_URL}/bar-chart/${month}`);
};

export const getPieChartData = (month) => {
  return axios.get(`${API_BASE_URL}/pie-chart/${month}`);
};
