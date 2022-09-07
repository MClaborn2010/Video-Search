import axios from "axios";

const KEY = "AIzaSyCRT60tDwqLgrex9Mc7IfPzjGBaNk3bgXI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
