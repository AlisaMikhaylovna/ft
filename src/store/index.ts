import { configureStore } from '@reduxjs/toolkit'
import ftReducer from './modules/ft'

const store = configureStore({
    reducer: {
        ft: ftReducer
    }
})

export type Dispatch = typeof store.dispatch;

export default store