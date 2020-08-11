import axios from "axios";

const KEY = "AIzaSyAxKpNJOfnpQJ__x09xBIOpvkXyA06hIKM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 6,
    key: KEY,
  },
});
