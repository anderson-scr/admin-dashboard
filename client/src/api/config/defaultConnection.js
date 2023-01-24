import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3003/admin-dashboard/api/",
  
  "Accept": "application/json",
  "Content-Type": "application/json"
});