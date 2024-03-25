import { configureStore } from '@reduxjs/toolkit'
import todoSlise from './todoSlice'

export default configureStore({
  reducer: {
    sliceTodos: todoSlise
  }
})
