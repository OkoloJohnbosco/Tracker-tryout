import axios from "axios";

const Instance = axios.create({
  baseURL: "https://covid19.mathdro.id/api",
});

export default Instance;
