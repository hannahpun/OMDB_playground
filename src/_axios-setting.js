"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"].defaults.baseURL = 'http://www.omdbapi.com';
axios_1["default"].defaults.headers['Content-Type'] = 'application/json';
// Add a request interceptor
axios_1["default"].interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
// Add a response interceptor
axios_1["default"].interceptors.response.use(function (response) {
    return response;
}, function (error) { });
