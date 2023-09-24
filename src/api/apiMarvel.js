import axios from "axios";
import { MD5 } from "crypto-js";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const API_KEY = import.meta.env.VITE_API_KEY;
// const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};

axios.defaults.baseURL = "http://gateway.marvel.com";

export const fetchHeroes = async (value) => {
  let ts = Date.now().toString();
  let apiKey = "05d32a8a8296e04f04dbcbaf405e5794";
  let privateKey = "5ef7e1d9801a02a54662c95c3d1f7339529a1e03";
  let hash = getHash(ts, privateKey, apiKey);

  const { data } = await axios.get(
    `/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`
  );

  return data;
};
