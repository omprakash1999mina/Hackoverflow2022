import {configureStore} from '@reduxjs/toolkit';
import colorSlice from '../reduxState/Colours/colorSlice';

export const store = configureStore({
    reducer: {
        color: colorSlice,
    },
}) 
