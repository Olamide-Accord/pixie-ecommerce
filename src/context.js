import React, { createContext, useContext, useState, useReducer, useEffect } from "react";
import { data} from "./data"
import reducer from "./reducer"

const AppContext = createContext();

const url = "https://fakestoreapi.com/products"

const initialState = {
  cart: data,
  shoppingCart: [],
  total: 0,
  amount: 0
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({type: "CLEAR_CART"})
  }

  const [filter, setFilter] = useState(state.cart)

  const filterCategory = (category) => {
    let newRegion = state.cart.filter((cartItem) => cartItem.categories === category)
    setFilter(newRegion)
  }

  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload: id})
  }

  const toggleAmount = (id, type) => {
    dispatch({type: "TOGGLE_AMOUNT", payload: {id, type}})
  }

  const addCart = (product) => {
    dispatch({type: "ADD_CART", payload: product})
  }

  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  }

  useEffect(() => {
    dispatch({type: 'GET_TOTAL'});
  }, [state.shoppingCart]);


  return (
    <AppContext.Provider value={{
      navbar, 
      toggleNavbar,
      ...state,
      clearCart,
      removeItem, 
      toggleAmount,
      addCart,
      filterCategory,
      setFilter,
      filter
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppProvider, AppContext}