import { apiRoutes } from "./config/routes";
import axios from "./config/defaultConnection";

export const apiUsers = {
  login: async (loginData) => {
    try {
      const apiCall = await axios.post("http://localhost:3003/admin-dashboard/api/users/login", JSON.stringify(loginData));

      console.log(apiCall)
    } catch (error) {
      console.log(error)
    }
  }
};