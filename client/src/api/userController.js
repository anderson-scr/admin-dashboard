import { apiRoutes } from "./config/routes";
import axios from "./config/defaultConnection";

export const apiUsers = {
  login: async (loginData) => {
    const apiCall = await axios.post(apiRoutes.users.login, loginData);
    return apiCall;
  },
  
  listAll: async () => {
    const apiCall = await axios.get(apiRoutes.users.listAll);
    return apiCall;
  }
};