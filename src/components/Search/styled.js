import styled from 'styled-components';

const Icon = styled.svg`
  color: #fff;
  width: 1.5em;
  height: 1.5em;
`;

const IconContainer = styled.div`
  order: 1;
`;

const Input = styled.input`
  padding: 8px 8px 8px 0px;
  border: 0;
`;

const InputContainer = styled.div`
  order: 3;
`;

const SearchContainer = styled.div`
  display: flex;

  background-color: #f0575d;
  padding: 1em;
`;

const Styled = { Icon, Input, IconContainer, InputContainer, SearchContainer };
export default Styled;
