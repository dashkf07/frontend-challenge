import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1";

export const theCatApi = axios.create({
  baseURL: API_URL,
  headers: {
    "x-api-key": 'live_GtYlrbtDMeaMYkSSZy1dr5oDzKlMaXzYXDK6xCAp1v1Eg4jSc8GH7OmeONwKrLpB',  
  },
});

export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: any[]; 
  favourite: object; 
}

export const fetchCats = async (page: number, limit: number = 10): Promise<CatImage[]> => {
  try {
    const response = await theCatApi.get(`/images/search`, {
      params: { limit, page },
    });
    return response.data; 
  } catch (error) {
    console.error("error while loading data:", error);
    throw new Error("Error while loading cats data"); 
  }
};
