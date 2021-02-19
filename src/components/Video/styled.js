import styled from 'styled-components';

const Container = styled.header`
  width: 350px;
`;

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 2rem;
`;
const Description = styled.p`
  align-self: bottom;
`;

const Styled = { Container, Image, InfoContainer, Title, Description };
export default Styled;
