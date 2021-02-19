import styled from 'styled-components';

const Header = styled.header`
  background-color: #f0575d;
  width: 100%;

  & > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const Item = styled.li``;

const LeftItem = styled(Item)`
  float: left;
`;
const RightItem = styled(Item)`
  float: right;
`;
const Styled = { Header, LeftItem, RightItem };
export default Styled;
