'use client'
import axios from "axios"
import CustomAxiosError from "./customAppError";

export const throwError = (error) => {
  throw new CustomAxiosError(error);
};

const backendUrl = 'http://localhost:2030/api/v1'

const globalOptions = {
    credentials: true,
    headers: {
      authorization: 'bearer ' + `${JSON.parse(window.sessionStorage.getItem('uTo'))}`
    }
}

export const loginFn = ({ email, password }) => {
    return axios.post(`${backendUrl}/users/login`, {
        email,password
    },{
      ...globalOptions
    }).then((res) => res.data)
    .catch((err) => {
        throwError(err);
    });
}

export const createProductFn = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((item) => {
    if(item != 'files'){
      formData.append(item, data[item])
    }
  })

  return axios.postForm(`${backendUrl}/products/`, formData ,{
    ...globalOptions,
  }).then((res) => res.data)
  .catch((err) => {
      throwError(err);
  });
}
