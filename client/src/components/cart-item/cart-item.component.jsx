import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity, size } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{`${name} (${size})`}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
