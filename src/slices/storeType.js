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
  name: 'storeType',
  initialState,
  reducers: {
    getList(state, action) {
      const { dataStoreType } = action.payload;
      state.isLoading = false;
      state.data = dataStoreType;
    },
    setPending(state, action) {
        state.isLoading = true;
    }
  }
});

export const reducer = slice.reducer;

export const getStoreType = (parameter) => async (dispatch) => {
    dispatch(slice.actions.setPending());
    const requestOption = {
        url: `${API.STORE_TYPE}?${encodeParams(parameter)}`,
        // accessToken: authen.userData.token
    }
    const url = `${API.STORE_TYPE}`

    const response = await axios.get(url);
    dispatch(slice.actions.getList(response.data));
};

export default slice;
