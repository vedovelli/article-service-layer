import axios from 'axios';
import * as userService from './users';

export const http = axios.create({
  baseURL: '/api',
});

export { userService };
