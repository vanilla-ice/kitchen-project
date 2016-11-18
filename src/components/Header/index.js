import React, { Component } from 'react';
import { connect } from 'react-redux';
import global from "../../constants/styles/settings.scss";
import styles from './index.scss';
import cn from 'classnames';
import { toggleSlider } from '../../list';

import Checkbox from '../Checkbox';
import logo from '../../assets/images/slider-button.png';
import icon1 from '../../assets/images/checkbox_icon1.svg';

class Header extends Component {

  renderCheckboxes() {

    const { toggleSlider } = this.props;

    return (
      <div className={styles.bottom}>
        <Checkbox checked title="Вытяжка" img={icon1} onClick={ toggleSlider.bind(this, 'kitchenHood') }/>
        <Checkbox checked title="Вытяжка" img={icon1} onClick={ toggleSlider.bind(this, 'hob') } />
        <Checkbox checked title="Вытяжка" img={icon1} onClick={ toggleSlider.bind(this, 'oven') } />
        <Checkbox checked title="Вытяжка" img={icon1} onClick={ toggleSlider.bind(this, 'dishwasher') } />
        <Checkbox checked title="Вытяжка" img={icon1} onClick={ toggleSlider.bind(this, 'fridge') } />
      </div>
    )
  }

  render() {

    return (
      <div className={styles.header}>
        <div className={cn(global.container, styles.container)}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <div className={styles.row}>
                <span className={styles.name}>БИРЖА КУХОНЬ</span>
                <span className={styles.city}>Город: Москва</span>
              </div>
              <div className={styles.row}>
                <img src={logo} alt="" />
              </div>
            </div>

            <div className={styles.buttons}>
              <a href="#" className={styles.button}>Мне нужна кухня</a>
              <a href="#" className={styles.button}>8(800)333-17-90</a>
            </div>
          </div>

          <div className={styles.middle}>
            <div className={styles.title}>Умный подбор кухонной техники</div>
            <div className={styles.subtitle}>Мы поможем вам правильно подобрать встраиваемую кухонную технику</div>
          </div>

          {this.renderCheckboxes()}
        </div>

      </div>
    )
  }
};

function mapStateToProps(state) {
  const { list } = state;

  return {
    list
  };
}

export default connect(mapStateToProps, { toggleSlider })(Header);
