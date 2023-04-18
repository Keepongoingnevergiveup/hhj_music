import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSongCategory, getSongCategoryList } from "../service/songs"
import type { IRootState } from "@/store"


interface IThunkState {
    state : IRootState & { getIn: (args: string[]) =>void}
}
export const fetchCategoryAction = createAsyncThunk<
 void,
 number,
 IThunkState
>('category',
    (_, { dispatch, getState }) => {
        getSongCategory().then((res) => {
            dispatch(changeCategotyAction(res.category))
        })
        const name = getState().getIn(["songs", "currentCategory"]);
        getSongCategoryList().then((res) => {
            dispatch(changeCategotySongsAction(res.categorySongs))
        })
    }
)



 export interface ICategoryState {
    category: any
    categorySongs: any
}

const initialState: ICategoryState = {
    category:[],
    categorySongs: {}
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategotyAction( state, { payload }) {
            state.category = payload
        },
        changeCategotySongsAction( state, { payload }) {
            state.categorySongs = payload
        }
    }
})

export const { changeCategotyAction } = categorySlice.actions
export const { changeCategotySongsAction } = categorySlice.actions


export default categorySlice.reducer
