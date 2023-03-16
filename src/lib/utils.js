import axios from 'axios';
import { PROJECTS_API_URL, MEDIA_API_URL } from './constants';

export const getAllProjectsFromServer = async () => {
  try {
    const { data } = await axios.get(PROJECTS_API_URL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFeaturedImage = async (id) => {
  try {
    const res = await axios.get(`${MEDIA_API_URL}/${id}`);
    return res.data.guid.rendered;
  } catch (error) {
    console.log(error);
    return '';
  }
};