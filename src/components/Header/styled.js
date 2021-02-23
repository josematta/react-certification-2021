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

const FloatedItem = styled.li`
  float: ${(props) => props.float};
`;

const Styled = { Header, FloatedItem };
export default Styled;
