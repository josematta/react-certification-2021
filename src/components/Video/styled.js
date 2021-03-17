import styled from 'styled-components';

export const Container = styled.header`
  width: 350px;
`;

export const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const InfoContainer = styled.div`
  padding: 1rem;
`;

export const Title = styled.div`
  font-size: 2rem;
`;
export const Description = styled.p`
  align-self: bottom;
`;
