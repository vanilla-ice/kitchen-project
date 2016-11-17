import React, { Component } from 'react';
import styles from './App.scss';
import { connect } from 'react-redux';
import { increment } from './counter';
import cn from 'classnames';

class App extends Component {
  render() {
    const { count } = this.props;

    return (
      <div className={cn(styles.app, styles.rootApp)}>
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
