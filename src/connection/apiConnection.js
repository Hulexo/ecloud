import axios from "axios";

// replace your api url with that
const url = "192.168.1.1/";

export default axios.create({
  baseURL: url,
});
