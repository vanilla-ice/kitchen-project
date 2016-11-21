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
    const categories = this.props.list.categories;

    return (
      <div className={styles.bottom}>
        <Checkbox className={styles.checkbox} checked title={categories[0]._} category_id={categories[0].$.id} img={icon1} onClick={ toggleSlider.bind(this, 'kitchenHood') }/>
        <Checkbox className={styles.checkbox} checked title={categories[1]._} category_id={categories[1].$.id} img={icon1} onClick={ toggleSlider.bind(this, 'hob') } />
        <Checkbox className={styles.checkbox} checked title={categories[2]._} category_id={categories[2].$.id} img={icon1} onClick={ toggleSlider.bind(this, 'oven') } />
        <Checkbox className={styles.checkbox} checked title={categories[3]._} category_id={categories[3].$.id} img={icon1} onClick={ toggleSlider.bind(this, 'dishwasher') } />
        <Checkbox className={styles.checkbox} checked title={categories[4]._} category_id={categories[4].$.id} img={icon1} onClick={ toggleSlider.bind(this, 'fridge') } />
      </div>
    )
  }

  render() {

    return (
      <div className={styles.header}>
        <div className={cn(global.container, styles.container)}>
          <div className={styles.top}>
            <div className={styles.left_inner}>
              <div className={styles.logo}>
                <div className={styles.row}>
                  <span className={styles.name}>БИРЖА<br />КУХОНЬ</span>
                  <span className={styles.city}>Город: Москва</span>
                </div>
                <div className={styles.row}>
                  <img src={logo} alt="" />
                </div>
              </div>
            </div>

            <div className={styles.right_inner}>

              <div className={styles.buttons}>
                <a href="#" className={styles.button}>Мне нужна кухня</a>
                <a href="#" className={styles.button}>8(800)333-17-90</a>
              </div>

            </div>

          </div>
          <div className={styles.middle}>
            <div className={styles.title}>Умная покупка кухонной техники</div>
            <div className={styles.subtitle}>После оплаты техника может храниться на складе до готовности кухни, потом мы её привезём, подключим и даже научим ей пользоваться 🎂</div>
          </div>

          {this.renderCheckboxes()}

          <div className={styles.color_select}>
            <div className={styles.heading}>
              Какого цвета техника вам подойдет?
            </div>
          </div>
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
