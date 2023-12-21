import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";


const options = {
  params: {
    maxResults: "50"
  },
  headers: {
    'X-RapidAPI-Key': "dabe4ab3eamsh8831d0e607e5ff5p1abd26jsn15de785d07cd",
    'X-RapidAPI-Host': "youtube-v31.p.rapidapi.com"
  }
};


export const fetchFromAPI = async (url) => {
    const data = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

