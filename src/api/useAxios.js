import axios from "axios";
 
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000", // Change as needed
  withCredentials: true, // Needed if using cookies for auth
});
 
export default function useAxios() {
  return { axiosInstance };
}
 