import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #f0575d;
  width: 100%;

  & > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export const FloatedItem = styled.li`
  float: ${(props) => props.float};
`;
