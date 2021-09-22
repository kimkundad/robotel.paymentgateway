import { createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';
import API from 'src/utils/api';
import encodeParams from 'src/utils/queryParam'

const initialState = {
  isLoading: false,
  data: {
    currentPage: 0,
    hasNext: false,
    hasPrevious: false,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0,
    items: []
  },
  detail: {}
};

const slice = createSlice({
  name: 'mdr',
  initialState,
  reducers: {
    getList(state, action) {
      const { dataMdr } = action.payload;
      state.isLoading = false;
      state.data = dataMdr;
    },
    setPending(state, action) {
        state.isLoading = true;
    },
    getDetail(state, action) {
      const { dataMdrDetail } = action.payload;
      state.isLoading = false;
      state.detail = dataMdrDetail;
    },
  }
});

export const reducer = slice.reducer;

export const getMdr = (parameter) => async (dispatch) => {
    dispatch(slice.actions.setPending());
    const requestOption = {
        url: `${API.MDR}?${encodeParams(parameter)}`,
        // accessToken: authen.userData.token
    }
    const url = `${API.MDR}`

    const response = await axios.get(url);
    dispatch(slice.actions.getList(response.data));
};

export const getMdrDetail = (id) => async (dispatch) => {
  dispatch(slice.actions.setPending());
  const requestOption = {
      url: `${API.MDR}/${id}`,
      // accessToken: authen.userData.token
  }
  const url = `${API.MDR}/${id}`

  const response = await axios.get(url);
  dispatch(slice.actions.getDetail(response.data));
};

export default slice;
