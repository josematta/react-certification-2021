import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getFilteredItems } from '../../utils/filter-videos';
import { useAuth } from '../../providers/Auth';
import Video from '../../components/Video';
import Styled from './styled';

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
    <Styled.Section ref={sectionRef}>
      <Styled.Container>
        {visibleItems.map(({ etag, snippet }) => (
          <Video key={etag} etag={etag} snippet={snippet} />
        ))}
      </Styled.Container>
    </Styled.Section>
  );
}

export default HomePage;
