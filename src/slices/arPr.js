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
  name: 'arPr',
  initialState,
  reducers: {
    getList(state, action) {
      const { dataArPr } = action.payload;
      state.isLoading = false;
      state.data = dataArPr;
    },
    setPending(state, action) {
        state.isLoading = true;
    }
  }
});

export const reducer = slice.reducer;

export const getArPr = (parameter) => async (dispatch) => {
    dispatch(slice.actions.setPending());
    const requestOption = {
        url: `${API.AR_PR}?${encodeParams(parameter)}`,
        // accessToken: authen.userData.token
    }
    const url = `${API.AR_PR}`

    const response = await axios.get(url);
    dispatch(slice.actions.getList(response.data));
};

export default slice;
