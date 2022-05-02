import axios from "axios";

export default axios.create({
  baseURL: "https://www.tagesschau.de/api2",
});
