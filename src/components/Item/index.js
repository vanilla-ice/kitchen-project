import React, { Component } from 'react';
import styles from './index.scss';
import cn from 'classnames';
import { connect } from 'react-redux';

import arrow from '../../assets/images/arrow.svg';

class Item extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current: 0
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    let maxCount = this.props.slides.length

    if (this.state.current + 1 < maxCount) {
      this.setState({
        current: ++this.state.current
      });
    }
    else {
      this.setState({
        current: maxCount
      });
    }

  }

  prevSlide() {

    if (this.state.current - 1 > 0) {
      this.setState({
        current: --this.state.current
      })
    }
    else {
      this.setState({
        current: 0
      })
    }


  }

  renderSlides() {
    let slides = this.props.slides;

    return slides.map((slide, i) => {
      return(
        <div key={i}>
          <div><img src={slide.picture[0]} alt="" /></div>
          <div>{slide.name[0]}</div>
          <div>{slide.price[0]}</div>
        </div>
      )
    });

  }

  render() {

    return (
      <div className={styles.item} >
        <button className={cn(styles.arrow, styles.arrow_reverse)} onClick={this.prevSlide}><img src={arrow} alt="" /></button>

        <div>{this.renderSlides()}</div>
        <div>{this.state.current}</div>

        <button className={styles.arrow} onClick={this.nextSlide}><img src={arrow} alt="" /></button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { list } = state;

  return {
    list
  };
}

export default connect(mapStateToProps, null)(Item);
