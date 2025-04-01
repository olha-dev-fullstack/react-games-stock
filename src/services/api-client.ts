import axios from "axios";
console.log(import.meta.env.VITE_RAWG_API_KEY);

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}