import React from 'react';
import './radio-button.css';
const RadioButton = ({ handleChange }) => (
  <div className='radio-toolbar'>
    <input
      type='radio'
      id='S'
      name='size'
      value='S'
      onChange={handleChange}
      required
    />
    <label htmlFor='S'>S</label>

    <input
      type='radio'
      id='M'
      name='size'
      value='M'
      onChange={handleChange}
      required
    />
    <label htmlFor='M'>M</label>

    <input
      type='radio'
      id='L'
      name='size'
      value='L'
      onChange={handleChange}
      required
    />
    <label htmlFor='L'>L</label>

    <input
      type='radio'
      id='XL'
      name='size'
      value='XL'
      onChange={handleChange}
      required
    />
    <label htmlFor='XL'>XL</label>
  </div>
);

export default RadioButton;
