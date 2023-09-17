import axios from "axios";
import { API_URL, CONSUMER_KEY, CONSUMER_SECRET } from "../../app.config";
import { stripUrl } from "./helper";

axios.defaults.baseURL = stripUrl(API_URL) + "/wp-json/wc/v3";
axios.defaults.params = {};
axios.defaults.params.consumer_key = CONSUMER_KEY;
axios.defaults.params.consumer_secret = CONSUMER_SECRET;

export const fetchProducts = async (params) => {
  let apiData = await axios
    .get("/products", { params: { ...params } })
    .then((res) => {
      return res;
    })
    .catch((error) => {});
  return apiData?.data;
};
