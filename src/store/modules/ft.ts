import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from '@/store';

const ftStore = createSlice({
    name: 'ft',
    initialState: {
        ftList: [],
    },
    reducers: {
        setFTList(state, action) {
            state.ftList = action.payload
        },
    }
})

const { setFTList } = ftStore.actions
const fetchFTList = () => {
    return async (dispatch: Dispatch) => {
        const res = await axios.get("");
        dispatch(setFTList(res.data))
    }
}

export { fetchFTList }

const ftReducer = ftStore.reducer

export default ftReducer