import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from './features/score-slice'
import { useSelector } from 'react-redux';


export const store = configureStore({
    reducer:{
        scoreReducer,
    }
})

export const useAppSelector = useSelector;