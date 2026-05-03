import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

/* import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:4000/api/v1"
      : "https://mern-stack-portfolio-backend-8509.onrender.com/api/v1",
  withCredentials: true,
}); */
