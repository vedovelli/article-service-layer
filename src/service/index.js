import axios from 'axios';
import store from '@/store';
import * as userService from './users';

const http = axios.create({
  baseURL: '/api',
});

http.interceptors.request.use(
  config => {
    // aqui se pode por exemplo anexar um header
    // contendo o JWT, por exemplo. É um ponto
    // central, todas as chamadas terão o header.
    return config;
  },
  error => Promise.reject(error),
);

http.interceptors.response.use(
  response => response,
  error => {
    // aqui se pode ter um gerenciamento de erros
    // centralizado. No exemplo abaixo estou
    // executando uma action na Vuex store para
    // guardar a mensagem de erro no state e
    // então a mensagem poderá ser consumida por
    // qualquer componente.
    store.dispatch('setErrorMessage', { error: error.response.data });

    return Promise.reject(error);
  },
);

export default http;

export { userService };
