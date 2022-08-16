

const reducer = (state, action) => {
  if(action.type === "CLEAR_CART") {
    return {...state, shoppingCart: []}
  }

  if(action.type === "REMOVE_ITEM") {
    const newCart = state.shoppingCart.filter((item) => item.id !== action.payload);
    return {
      ...state, 
      shoppingCart: newCart}
  }

    
  if(action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.shoppingCart.map((cartItem) => {
      if(cartItem.id === action.payload.id) {
        if(action.payload.type === "inc") {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        if(action.payload.type === "dec") {
          return {...state, amount: cartItem.amount - 1}
        }
      }
      return cartItem;
    }).filter((cartItem) => cartItem.amount !== 0)
    return {...state, shoppingCart: tempCart}
  }

  if(action.type === "ADD_CART"){
    const newCart = state.cart.filter((item) => item.id === action.payload)
    return{...state, shoppingCart: newCart}
  }

  if(action.type === 'GET_TOTAL') {
    let {total, amount} = state.shoppingCart.reduce((cartTotal, cartItem) => {
      const {price, amount} = cartItem;
      const itemTotal = price * amount;
      cartTotal.total += itemTotal;
      cartTotal.amount += amount;
      return cartTotal;
    }, {
      total: 0,
      amount: 0
    })
    total = parseFloat(total.toFixed(2))
    return {...state, total, amount}
  }

  return state;
}

export default reducer;