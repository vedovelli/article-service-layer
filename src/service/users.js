import xss from 'xss';
import { cloneDeep } from 'lodash';
import http from '@/service';

export const users = () => http.get('users');

export const postUser = data => {
  // É na Service Layer que eu trato os dados
  // antes de enviar a API. Medida de segurança
  // para evitar ataques XSS é um bom exemplo.
  const safeData = xss(cloneDeep(data));

  return http.post('users', safeData);
};
