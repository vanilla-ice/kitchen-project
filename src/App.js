import React, { Component } from 'react';
import styles from './App.scss';
import { connect } from 'react-redux';
import { increment } from './counter';

class App extends Component {
  render() {
    const { count } = this.props;

    return (
      <div className={styles.app}>
        <button onClick={ this.props.increment }>тык</button>
        <h1> {count} </h1>
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
