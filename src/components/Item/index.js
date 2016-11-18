import React, { Component } from 'react';
import styles from './index.scss';
import cn from 'classnames';

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

  componentWillMount(nextProp, nextState) {

  }

  nextSlide() {
    this.setState({
      current: this.state.current + 1
    });
  }

  prevSlide() {
    this.setState({
      current: this.state.current - 1
    });
  }

  render() {
    return (
      <div className={styles.item} >
        <button className={cn(styles.arrow, styles.arrow_reverse)} onClick={this.prevSlide}><img src={arrow} alt="" /></button>

        <div className={styles.inner}>
          <div className={styles.image}><img  alt="" /></div>
          <div className={styles.description}>
            <div className={styles.name}>{this.state.current}</div>
            <div className={styles.labels}><div className={styles.more} ></div></div>
            <div className={styles.price}></div>
          </div>

        </div>
        <button className={styles.arrow} onClick={this.nextSlide}><img src={arrow} alt="" /></button>
      </div>
    );
  }
}



export default Item;
