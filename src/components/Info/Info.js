import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} image={infoData.image} />
    <div>
      {infoData.content}
    </div>
  </Container>
);

export default Info;