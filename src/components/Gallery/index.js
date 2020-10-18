import React, {Component} from 'react';
import {Wrap, ImgContainer,} from "./styled";

import Loader from '../Loader';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


class Gallery extends Component {
  state = {
    isOpen: false,
    photoIndex: null,
    count: 15,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.props.getConfession();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (document.documentElement.clientHeight + 100 + document.getElementById('footer').clientHeight + window.pageYOffset > document.documentElement.scrollHeight) {
      //долистали до конца страницы
      this.setState((prevState) => ({count: prevState.count + 15}));
    }
  };

  setPhotoIndex = (index) => {
    this.setState({isOpen: true, photoIndex: index});
  };

  loadHandler = (src) => {
    const image = document.getElementById(src);
    image.style.opacity = '1';
  }

  drowPreview = (arr) => {
    const end = this.state.count;
    return arr.filter((i, index) => index <= end)
        .map((item, index) => (<ImgContainer
                key={index}
                onClick={() => this.setPhotoIndex(index)}
            >
              <img src={item} alt='' id={item} onLoad={() => this.loadHandler(item)} />
            </ImgContainer>)
        )
  };

  render() {
    const {
      isOpen,
      photoIndex,
    } = this.state;
    const {
      images
    } = this.props;
    return (
        <Wrap maxHeight={images.length} id='gallery'>
          {this.drowPreview(images)}
          {isOpen && (
              <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  onCloseRequest={() => this.setState({isOpen: false})}
                  onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                      })
                  }
                  onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                      })
                  }
              />
          )}
        </Wrap>
    )
  }
}

export default Gallery;
