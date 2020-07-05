import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { setCurrentRoute } from '../../redux/shop/shop.actions';

import { toggleModal } from '../../redux/shop/shop.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  QuickButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  MoreInfoButton,
} from './collection-item.styles';

const CollectionItem = ({
  item,
  title,
  toggleModal,
  setCurrentRoute,
  history,
  match,
}) => {
  const { name, price, imageUrl } = item;
  const route = title
    ? `${match.url}/${title}/${item.id}`
    : `${match.url}/${item.id}`;

  const handleClick = () => {
    toggleModal(item);
    setCurrentRoute(route);
  };

  const handleInfo = (route) => {
    history.push(route);
  };
  return (
    <CollectionItemContainer>
      <BackgroundImage
        className='image'
        imageUrl={imageUrl}
        onClick={() => handleInfo(route)}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <MoreInfoButton onClick={() => handleInfo(route)} inverted>
        More Infomation
      </MoreInfoButton>
      <QuickButton onClick={handleClick} inverted>
        Quick Add
      </QuickButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (item) => dispatch(toggleModal(item)),
  setCurrentRoute: (currentRoute) => dispatch(setCurrentRoute(currentRoute)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
