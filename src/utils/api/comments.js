import { axios } from 'core';

export default {
    postComments: text=> axios.post(`/comment/postcomments`,{text}).then(respons=>{respons.data})
  };