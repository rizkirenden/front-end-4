import { getMovies } from "./firestoreCrud";

export const getData = async (category) => {
  try {
    const data = await getMovies(category);
    return data;
  } catch (error) {
    console.error(`Failed to fetch ${category} movies:`, error);
    throw error;
  }
};
