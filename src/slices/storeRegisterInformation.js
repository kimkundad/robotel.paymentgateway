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
  name: 'storeRegisterInformation',
  initialState,
  reducers: {
    getList(state, action) {
      const { dataStoreRegister } = action.payload;
      state.isLoading = false;
      state.data = dataStoreRegister;
    },
    setPending(state, action) {
        state.isLoading = true;
    },
    getDetail(state, action) {
      const { dataStoreRegisterDetail } = action.payload;
      state.isLoading = false;
      state.detail = dataStoreRegisterDetail;
    },
  }
});

export const reducer = slice.reducer;

export const getStoreRegisterInformation = (parameter) => async (dispatch) => {
    dispatch(slice.actions.setPending());
    const requestOption = {
        url: `${API.STORE_REGISTER_INFORMATION}?${encodeParams(parameter)}`,
        // accessToken: authen.userData.token
    }
    const url = `${API.STORE_REGISTER_INFORMATION}`

    const response = await axios.get(url);
    dispatch(slice.actions.getList(response.data));
};

export const getStoreRegisterDetail = (id) => async (dispatch) => {
  dispatch(slice.actions.setPending());
  const requestOption = {
      url: `${API.STORE_REGISTER_INFORMATION}/${id}`,
      // accessToken: authen.userData.token
  }
  const url = `${API.STORE_REGISTER_INFORMATION}/${id}`

  const response = await axios.get(url);
  dispatch(slice.actions.getDetail(response.data));
};

export default slice;
