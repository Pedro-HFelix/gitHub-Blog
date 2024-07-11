import styled from 'styled-components'

export const FormBlogContainer = styled.form`
  width: 864px;
  input {
    width: 100%;
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
