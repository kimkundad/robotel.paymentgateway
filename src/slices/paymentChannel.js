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
  name: 'paymentChannel',
  initialState,
  reducers: {
    getList(state, action) {
      const { dataPaymentChannel } = action.payload;
      state.isLoading = false;
      state.data = dataPaymentChannel;
    },
    setPending(state, action) {
        state.isLoading = true;
    }
  }
});

export const reducer = slice.reducer;

export const getPaymentChannel = (parameter) => async (dispatch) => {
    dispatch(slice.actions.setPending());
    const requestOption = {
        url: `${API.PAYMENT_CHANNEL}?${encodeParams(parameter)}`,
        // accessToken: authen.userData.token
    }
    const url = `${API.PAYMENT_CHANNEL}`

    const response = await axios.get(url);
    dispatch(slice.actions.getList(response.data));
};

export default slice;
