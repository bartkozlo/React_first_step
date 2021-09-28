import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero image={this.props.image} titleText={this.props.title} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='To do' />
          <Column title='In Progress' />
          <Column title='Done' />
        </div>
      </section>
    )
  }
}

export default List;