import React from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../../redux/shop/shop.selectors';

import SliderPreviewCollection from '../../components/slider-images/slider-preview.collection';
import ItemContent from '../../components/item-content/item-content.collection';
import './item-page.css';

const ItemPage = ({ item }) => {
  return (
    <div id='content-wrapper'>
      <div className='column'>
        <SliderPreviewCollection item={item} />
      </div>
      <div className='column'>
        <ItemContent item={item} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { collectionId, itemId } = ownProps.match.params;
  return {
    item: selectItem(collectionId, itemId)(state),
  };
};

export default connect(mapStateToProps)(ItemPage);
