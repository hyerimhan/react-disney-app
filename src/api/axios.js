import axios from 'axios';

// const {API_KEY} = process.env.REACT_APP_API_KEY

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e32fa88f79896fd0a278db5b42dfdf2b",
    language: "ko-KR",
  },
});

export default instance;