import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getFilteredItems } from '../../utils/filter-videos';
import { useAuth } from '../../providers/Auth';
import Video from '../../components/Video';
import { Section, Container } from './styled';

function HomePage({ items, filter }) {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const visibleItems = getFilteredItems(items, filter);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <Section ref={sectionRef}>
      <Container>
        {visibleItems.map(({ etag, snippet, id }) => (
          <Video id={id} key={etag} etag={etag} snippet={snippet} />
        ))}
      </Container>
    </Section>
  );
}

export default HomePage;
