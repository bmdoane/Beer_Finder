import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 450px;
  margin: 0 auto 40px;
  & h1 {
    margin: 20px auto;
  }
`;
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;
`;

export const HomeLink = styled(Link)`
  color: #000;
  &:hover {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }
`;
