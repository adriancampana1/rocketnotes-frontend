import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketnotes-hl16.onrender.com',
});
