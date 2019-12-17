import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

export const LoginForm = styled(Form)`
  button:first-of-type {
    margin-right: 10px;
  }
`;

export const FormLabel = styled(Form.Label)`
  padding-left: 5px;

  :not(:first-child) {
    padding-top: 5px;
  }
`;
