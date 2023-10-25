import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        rank: "12890",
        percentile: "37",
        current_score: "7",
    }
}

export const score = createSlice({
    name: "score",
    initialState,
    reducers: {
        Update: (_state, action) => {
            return {
                value: {
                    rank: action.payload.rank,
                    percentile: action.payload.percentile,
                    current_score: action.payload.current_score,
                }
            }
        }
    }
})

export const { Update } = score.actions;
export default score.reducer;