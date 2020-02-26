import { axios } from 'core';

export default {
    postlogin: () => axios.post(`account/login`),
    postRegister: ()=> axios.post(`register`)
}