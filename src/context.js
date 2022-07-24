import React, { createContext, useContext, useState, useReducer } from "react";
import {cartData} from "./data"
import reducer from "./reducer"

const AppContext = createContext();

const initialState = {
  cart: cartData,
  total: 0,
  amount: 0
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({type: "CLEAR_CART"})
  }

  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload: id})
  }

  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  }

  return (
    <AppContext.Provider value={{
      navbar, 
      toggleNavbar,
      ...state,
      clearCart,
      removeItem
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppProvider, AppContext}