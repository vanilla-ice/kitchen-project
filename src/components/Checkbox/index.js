import React from 'react';
import styles from './index.scss';

import check_icon from '../../assets/images/checked.svg';

const Checkbox = ({ checked, img, title, onClick }) => {

  return (
    <div className={styles.checkbox} onClick={onClick}>
      {
        checked ? <img src={check_icon} className={styles.icon} alt="" /> : null
      }

      <div className={styles.image}>
        <img src={img} alt="" />
      </div>

      <div className={styles.title}>{title}</div>
    </div>
  )

}

export default Checkbox;
