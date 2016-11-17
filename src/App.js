import React, { Component } from 'react';
import styles from './App.scss';
import { connect } from 'react-redux';
import { increment } from './counter';
import cn from 'classnames';

import Header from './components/Header';

class App extends Component {
  render() {
    //const { count } = this.props;

    return (
      <div className={cn(styles.app, styles.rootApp)}>
        <Header />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { counter } = state;

  return {
    count: counter.count
  };
}

export default connect(mapStateToProps, { increment })(App);
