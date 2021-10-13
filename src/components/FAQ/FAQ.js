import React from 'react';
import { faqData } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const FAQ = () => {
  const { content, title, image } = faqData;
  return (
    <Container>
      <Hero titleText={title} image={image} />
      <div>
        {content}
      </div>
    </Container>
  );
};

FAQ.propTypes = {
  content: PropTypes.node,
  image: PropTypes.string,
  title: PropTypes.node,
};

export default FAQ;