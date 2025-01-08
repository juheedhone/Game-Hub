import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0c3f617a41084405b1a95ca7ac9cb25e",
  },
});