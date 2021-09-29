import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { title } = props;
  return (
    <article className={styles.component}>
      {title}
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
};

export default Card;

