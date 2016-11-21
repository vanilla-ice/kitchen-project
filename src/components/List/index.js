import React, { Component } from 'react';
import global from '../../constants/styles/settings.scss';
import styles from './index.scss';
import { connect } from 'react-redux';

import Item from '../Item';

class List extends Component {
  renderSliders() {
    const categoryList = this.props.list.categoriesMap;
    
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
          {this.renderSliders()}
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
