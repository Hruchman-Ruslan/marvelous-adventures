import axios from "axios";
import { MD5 } from "crypto-js";

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
