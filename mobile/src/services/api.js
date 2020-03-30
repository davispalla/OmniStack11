import axios from 'axios';
import { DefaultTheme } from '@react-navigation/native';

const api = axios.create({
    baseURL: 'http://192.168.0.123:3333'
});
export default api;