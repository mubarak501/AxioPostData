import { create } from "axios";
export const BASE_URL = "https://jsonplaceholder.typicode.com";
export const getData = create({ baseURL: BASE_URL });
