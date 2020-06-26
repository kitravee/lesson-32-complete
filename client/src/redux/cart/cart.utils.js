export const checkExistingCartItem = (cartItem, targetItem) => {
  return cartItem.id === targetItem.id && cartItem.size === targetItem.size;
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) =>
    checkExistingCartItem(cartItem, cartItemToAdd),
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      checkExistingCartItem(cartItem, cartItemToAdd)
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) =>
    checkExistingCartItem(cartItem, cartItemToRemove),
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => !checkExistingCartItem(cartItem, cartItemToRemove),
    );
  }

  return cartItems.map((cartItem) =>
    checkExistingCartItem(cartItem, cartItemToRemove)
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
