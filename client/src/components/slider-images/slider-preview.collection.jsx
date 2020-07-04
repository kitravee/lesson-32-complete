import React from 'react';
import './slider-preview.collection.css';

// Mockup image
// import images from './slider-images';

class SliderPreviewCollection extends React.Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
    this.state = {
      picActive: 0,
      mainPic: '',
    };
  }

  componentDidMount() {
    const { item } = this.props;
    this.setState({ mainPic: item.imageUrl });
  }

  handleRightClick = () => {
    return this.scroller.current
      ? (this.scroller.current.scrollLeft += 180)
      : null;
  };

  handleLeftClick = () => {
    return this.scroller.current
      ? (this.scroller.current.scrollLeft -= 180)
      : null;
  };

  setPicActive = (num, pic) => {
    this.setState({ picActive: num });
    this.setState({ mainPic: pic });
  };

  render() {
    const { picActive, mainPic } = this.state;
    return (
      <div>
        <img id='featured' alt='slide-img' src={mainPic} />

        <div id='slide-wrapper'>
          <div
            alt='slide-img'
            onClick={() => this.handleLeftClick()}
            className='slideLeft'
          >
            &#10094;
          </div>

          <div id='slider' ref={this.scroller}>
            <img
              className={`thumbnail ${picActive === 0 ? 'active' : ''}`}
              alt='slide-img'
              src={mainPic}
              onClick={() => {
                this.setPicActive(0, mainPic);
              }}
            />
          </div>
          <div
            className='slideRight'
            alt='slide-img'
            onClick={() => this.handleRightClick()}
          >
            &#10095;
          </div>
        </div>
      </div>
    );
  }
}

export default SliderPreviewCollection;
