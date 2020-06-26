import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import RadioButton from '../radio-button/radio-button';
import './quick-info.css';

const QuickInfo = ({ toggleModal, item, addItem }) => {
  const [currentItem, setItem] = useState(item);

  const handleSubmit = async (event) => {
    event.preventDefault();
    addItem(currentItem);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...currentItem, [name]: value });
  };

  return (
    <div className='quick-info-modal'>
      <div className='quick-info-container'>
        <div className='quick-info-item one'>
          <img
            className='modal-image'
            src={`${item.imageUrl}`}
            alt={`${item.name}`}
          />
        </div>
        <div className='quick-info-item two'>
          <span className='modal-close' onClick={toggleModal}>
            &times;
          </span>
          <h1 className='modal-header'>{item.name}</h1>
          <form onSubmit={handleSubmit}>
            <p>Plase select your size</p>
            <RadioButton handleChange={handleChange} required></RadioButton>
            <p>Size description</p>
            <CustomButton type='submit' className='modal-center' inverted>
              ADD TO CART
            </CustomButton>
          </form>
          <CustomButton type='submit' className='modal-buttom'>
            MORE INFO
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(QuickInfo);
