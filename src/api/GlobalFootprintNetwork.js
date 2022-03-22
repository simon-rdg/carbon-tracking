import axios from "axios";

const KEY = "1PrAftnn3kjUl7Vjiobr1hnekgLj7I3QuLduCanm5htbSJ9Sf44O";

export default axios.create({
  baseURL: "http://api.footprintnetwork.org/v1/",
  params: {
    key: KEY,
  },
});
