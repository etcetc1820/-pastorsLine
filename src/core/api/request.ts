import axios from "axios";

const instance = axios.create();

export const setHeader = (key: string, value: string): void => {
  instance.defaults.headers.common[key] = value;
};

export const setAuthHeader = (token: string): void => {
  setHeader("Authorization", `Bearer ${token}`);
};

export default instance;
