import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.css';
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer
    key={itemCount}
    className='jello-horizontal'
    onClick={toggleCartHidden}
  >
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
