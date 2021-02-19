import styled from 'styled-components';

const MenuButton = styled.button`
  padding: 12px;
  background-color: transparent;
  border: 0;
`;

const IconButton = styled.span`
  color: white;
`;

const SvgButton = styled.svg`
  fill: currentColor;
  width: 1em;
  height: 1em;

  font-size: 1.5rem;
  transition: fill 200m;
`;

const Styled = { MenuButton, IconButton, SvgButton };
export default Styled;
