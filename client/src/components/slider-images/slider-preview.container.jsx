import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SliderPreviewCollection from './slider-preview.collection';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const SliderPreviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(SliderPreviewCollection);

export default SliderPreviewContainer;
