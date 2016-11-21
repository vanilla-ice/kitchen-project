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
  constructor(props) {
    super(props);

    this.initState();
  }

  initState() {
    let cats = this.props.list.categoriesMap;
    const categories = this.props.list.categories;

    let visibleCategories = categories.slice(0, this.props.list.categoriesToShow);

    for(let category of categories) {
      let index = visibleCategories.indexOf(category);
      category.$.id = Number(category.$.id);
      category.visible = false;

      if (index !== -1) {
        category.visible = true;
        visibleCategories.splice(index, 1);
      }
      cats.set(category.$.id, []);
    }

    const goods = this.props.list.goods;

    for(let item of goods) {
      cats.get(Number(item.categoryId)).push(item);
    }

    return cats;
  }

  prepareCheckboxes() {
    const categories = this.props.list.categories;

    let result = [];
    for(let category of categories) {
      result.push(
        <Checkbox
          className={styles.checkbox}
          key={category.$.id}
          checked={category.visible}
          title={category._}
          category_id={category.$.id}
          img={icon1}
          onClick={toggleSlider.bind(this, category.$.id)} />
      );
    }

    return result;
  }

  renderCheckboxes() {
    const categories = this.props.list.categoriesMap;
    const { toggleSlider } = this.props;

    return (
      <div className={styles.bottom}>
        {this.prepareCheckboxes()}
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
