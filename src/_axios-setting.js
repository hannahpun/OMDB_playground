import axios from 'axios';
axios.defaults.baseURL = 'http://www.omdbapi.com';
axios.defaults.headers['Content-Type'] = 'application/json';

// Add a request interceptor
axios.interceptors.request.use(function (config) {

  return config;
}, function (error) {

  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

});