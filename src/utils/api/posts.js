import { axios } from 'core';

export default {
  get: () => axios.get(`/news/getnews`),
  getId: id => axios.get(`/news/getNewsById${id}`),
  remove: id => axios.delete(`.news/deletenews?${id}`),
};