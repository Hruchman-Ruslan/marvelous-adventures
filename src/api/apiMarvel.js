import axios from "axios";
import { MD5 } from "crypto-js";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

axios.defaults.baseURL = BASE_URL;

export const fetchHeroes = async (value) => {
  let ts = Date.now().toString();
  let apiKey = API_KEY;
  let privateKey = PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);

  const { data } = await axios.get(
    `/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`
  );

  return data;
};
