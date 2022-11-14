import axios from "axios";
import { apiUrl } from "../../service/api";
import { GET_LESSON, GET_CITY } from "../types";

export const getDataLesson = () => async (dispatch) => {
  const { data } = await axios.get(`${apiUrl}/api/pelajaran`);
  console.log("data action from redux", data);

  dispatch({
    type: GET_LESSON,
    payload: data,
  });
};

export const getDataCity = () => async (dispatch) => {
  const { data } = await axios.get(`${apiUrl}/api/guru/guru_kota`);
  console.log("data city from redux", data);

  dispatch({
    type: GET_CITY,
    payload: data,
  });
};
