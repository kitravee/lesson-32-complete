// import { connect } from 'react-redux';
// import { toggleModal } from '../../redux/shop/shop.actions';
// import { compose } from 'redux';
import CollectionItem from './collection-item.component';
import { withRouter } from 'react-router-dom';
// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
// import { createStructuredSelector } from 'reselect';

const CollectionItemContainer = withRouter(CollectionItem);

export default CollectionItemContainer;
