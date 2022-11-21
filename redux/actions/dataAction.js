import axios from "axios";
import { apiUrl } from "../../service/api";
import { GET_LESSON, GET_CITY, GET_CATEGORY, GET_BLOG } from "../types";

export const getDataLesson = () => async (dispatch) => {
  const { data } = await axios.get(`${apiUrl}/api/pelajaran`);

  dispatch({
    type: GET_LESSON,
    payload: data,
  });
};

export const getDataCity = () => async (dispatch) => {
  const { data } = await axios.get(`${apiUrl}/api/guru/guru_kota`);

  dispatch({
    type: GET_CITY,
    payload: data,
  });
};

export const getCategoryBlog = () => async (dispatch) => {
  const { data } = await axios.get(`${apiUrl}/api/info/kategori`);

  dispatch({
    type: GET_CATEGORY,
    payload: data,
  });
};

export const getBlog = () => async (dispatch) => {
  const { data } = await axios.get(`${apiUrl}/api/info`);

  dispatch({
    type: GET_BLOG,
    payload: data,
  });
};
