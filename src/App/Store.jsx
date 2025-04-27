import { configureStore } from '@reduxjs/toolkit'
import  changetheme  from '../Feture/changetheme'

export const store = configureStore({
  reducer: {
    theme : changetheme,
  },
})