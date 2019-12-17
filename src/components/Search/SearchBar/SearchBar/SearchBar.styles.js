import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 5px;
`;

export const Headline = styled.h3`
  text-align: center;
  padding: 10px 0;
  margin: 10px 0 14px;
`;

export const FormLabel = styled(Form.Label)`
  :not(:first-child) {
    padding-top: 5px;
  }
`;

export const FormButton = styled(Button)`
  width: 100%;
`;
