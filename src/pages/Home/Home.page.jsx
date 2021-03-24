import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getFilteredItems } from '../../utils/filter-videos';
import { useAuth } from '../../providers/Auth';
import MainDisplay from '../../components/MainDisplay';
import { Section, Container } from './styled';
import { useVideos } from '../../providers/Context';

function HomePage({ filter }) {
  const state = useVideos();

  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <Section ref={sectionRef}>
      <Container>
        <MainDisplay state={state} filter={filter} />
      </Container>
    </Section>
  );
}

export default HomePage;
