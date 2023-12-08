import axios from "axios";

class Service {
  createUser(data) {
    return axios.post("http://localhost:5173/Register", data);
  }
}
export default new Service();
