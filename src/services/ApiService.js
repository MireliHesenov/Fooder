import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getRestaturants() {
    return apiClient.get("/restaurants");
  },
  findRestaurant(name) {
    return apiClient.get("/restaurants", { params: { restaurant_name: name } });
  }
};
