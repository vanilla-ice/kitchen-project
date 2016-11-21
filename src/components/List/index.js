import React, { Component } from 'react';
import global from '../../constants/styles/settings.scss';
import styles from './index.scss';
import { connect } from 'react-redux';

import Item from '../Item';

class List extends Component {

  initSliders() {
    let cats = this.props.list.categoriesMap;
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

  renderSlider( categoryList ) {
    console.log(categoryList);

    let result = [];
    for(let good of categoryList) {
      result.push(<Item slides={good[1]} key={good[0]} />);
    }

    return result;
  }

  render() {

    return (
      <div className={styles.List}>
        <div className={global.container}>
          {this.renderSlider(this.initSliders())}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { list } = state;

  return {
    list
  };
}

export default connect(mapStateToProps, null)(List);
