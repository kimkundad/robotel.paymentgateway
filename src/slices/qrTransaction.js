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
  }
};

const slice = createSlice({
  name: 'qrTransaction',
  initialState,
  reducers: {
    getList(state, action) {
      const { dataQrTransaction } = action.payload;
      state.isLoading = false;
      state.data = dataQrTransaction;
    },
    setPending(state, action) {
        state.isLoading = true;
    }
  }
});

export const reducer = slice.reducer;

export const getQrTransaction = (parameter) => async (dispatch) => {
    dispatch(slice.actions.setPending());
    const requestOption = {
        url: `${API.QR_TRANSACTION}?${encodeParams(parameter)}`,
        // accessToken: authen.userData.token
    }
    const url = `${API.QR_TRANSACTION}`

    const response = await axios.get(url);
    dispatch(slice.actions.getList(response.data));
};

export default slice;
