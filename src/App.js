import React, { Component } from 'react';
import styles from './App.scss';
import cn from 'classnames';

import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {

    return (
      <div className={cn(styles.app, styles.rootApp)}>
        <Header />
        <Main />
      </div>
    );
  }
}


export default App;
