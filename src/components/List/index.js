import React, { Component } from 'react';
import global from '../../constants/styles/settings.scss';
import styles from './index.scss';
import { connect } from 'react-redux';

import Item from '../Item';

class List extends Component {

  renderSlider(isShown, list) {
    return isShown ? <Item list={list} key={list.order}/> : null
  }

  render() {

    const { list } = this.props;

    return (
      <div className={styles.List}>
        <div className={global.container}>
          {this.renderSlider(list.ui.kitchenHood, list.data.kitchenHood.list)}
          {this.renderSlider(list.ui.hob, list.data.hob.list)}
          {this.renderSlider(list.ui.oven, list.data.oven.list)}
          {this.renderSlider(list.ui.dishwasher, list.data.dishwasher.list)}
          {this.renderSlider(list.ui.fridge, list.data.fridge.list)}
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
