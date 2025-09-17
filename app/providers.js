'use client'

import { useEffect } from "react"
import { Provider, useDispatch } from "react-redux"
import { store } from "@/redux/store"
import { fetchProfile } from "@/redux/slices/profileSlice"
import { fetchWishList } from "@/redux/slices/wishListSlice"
import { fetchCart } from "@/redux/slices/cartSlice"
import { fetchSub } from "@/redux/slices/subSlice"
import { fetchLibrary } from "@/redux/slices/librarySlice"

function ReduxInitializer({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProfile())
    dispatch(fetchWishList())
    dispatch(fetchCart())
    dispatch(fetchSub())
    dispatch(fetchLibrary())
  }, [dispatch])

  return children
}

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ReduxInitializer>
        {children}
      </ReduxInitializer>
    </Provider>
  )
}
