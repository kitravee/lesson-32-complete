import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { toggleModal } from '../../redux/shop/shop.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, toggleModal }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => toggleModal(item)} inverted>
        Quick Add
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (item) => dispatch(toggleModal(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
