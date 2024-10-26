import axios from "axios";

export const API = axios.create({
  baseURL: "https://sdvunf.dbc-server.uz/api",
  headers: {
    "Content-Type": "application/json",
  },
});
