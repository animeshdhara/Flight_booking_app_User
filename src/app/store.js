import { configureStore } from '@reduxjs/toolkit'
import AdminListReducer from '../features/AdminListReducer'

export const store = configureStore({
  reducer: {
    adminList: AdminListReducer,
  },
})