import React, { useState } from 'react';

import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import RadioButton from '../radio-button/radio-button';
import './item-content.css';

const ItemContent = ({ item, addItem }) => {
  const [currentItem, setItem] = useState(item);
  const handleSubmit = async (event) => {
    console.log(currentItem);
    event.preventDefault();
    addItem(currentItem);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...currentItem, [name]: value });
    console.log(currentItem);
  };
  return (
    <div className='item-info'>
      <h1 className='content-header'>{`${item.name}`}</h1>
      <h2>{`$${item.price}`}</h2>

      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32
      </p>
      <form onSubmit={handleSubmit}>
        <RadioButton handleChange={handleChange} required></RadioButton>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <CustomButton type='submit'>Add to Cart</CustomButton>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemContent);
