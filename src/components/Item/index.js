import React, { Component } from 'react';
import styles from './index.scss';
import cn from 'classnames';
import { connect } from 'react-redux';

import arrow from '../../assets/images/arrow.svg';

class Item extends Component {

/*  constructor(props) {
    super(props);

    this.state = {
      current: 0
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {

    this.setState({
      current: this.state.current + 1
    });
  }

  prevSlide() {

    if (this.state.current - 1 > 0) {
      this.state.current = this.state.current - 1
    }
    else {
      this.state.current = 0
    }

    this.setState({
      current: this.state.current
    })
  } */

  /*initSliders(category) {
    const goods = this.props.list.goods;
    let elems = [];

    for (let good of goods) {
      if (good.categoryId === category) {
        elems.push(good);
      }
    }

    return elems;
  }*/

/*  initSliders() {
    let cats = new Map();
    const categories = this.props.list.categories;

    for(let item of categories) {
      cats.set(Number(item.$.id), []);
    }

    const goods = this.props.list.goods;

    for(let item of goods) {
      cats.get(Number(item.categoryId)).push(item);
    }

    return cats;
  }

  renderSlides() {
    const list = this.initSliders();

    let result = [];

    for(var offersList of list.values()) {
      offersList.map((item, _) => {
        console.log(item.name);
        return(
          <div className={styles.item} >
            <div className={styles.inner}>
              <div className={styles.image}><img  alt="" /></div>
              <div className={styles.description}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.labels}><div className={styles.more} ></div></div>
                <div className={styles.price}>{item.price}</div>
              </div>
            </div>
          </div>
        )
      });

    };
  }*/

  /*
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
  */

  renderSlides() {
    let slides = this.props.slides;

    return slides.map((slide, i) => {
      return(
        <div key={i}>
          <div><img src={slide.picture[0]} /></div>
          <div>{slide.name[0]}</div>
          <div>{slide.price[0]}</div>
        </div>
      )
    });

  }

  render() {

    return (
      /*<div className={styles.item} >
        <button className={cn(styles.arrow, styles.arrow_reverse)} onClick={this.prevSlide}><img src={arrow} alt="" /></button>
        */
        <div>{this.renderSlides()}</div>

        //<button className={styles.arrow} onClick={this.nextSlide}><img src={arrow} alt="" /></button>
      //</div>
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
