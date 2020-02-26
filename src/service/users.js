import { http } from '@/service';

export const users = () => http.get('users');
