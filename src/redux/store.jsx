import {configureStore} from '@reduxjs/toolkit'
import companyReducer from './companySlice'

const store=configureStore({
    reducer:{
        companies:companyReducer
    }
})

export default store;