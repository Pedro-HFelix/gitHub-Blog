import styled from 'styled-components'
import { mixin } from '../../../../styles/mixins'

export const GitHubCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 416px;
  height: 260px;
  padding: 32px;

  background-color: ${(props) => props.theme['base-post']};

  &:last-child {
    width: 352px;

    color: ${(props) => props.theme['base-text']};

    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: 32px;
  }
`

export const GitHubCardsSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 16px;

  h3 {
    flex: 1;
    max-width: 283px;
    color: ${(props) => props.theme['base-title']};
    font-size: ${mixin.fonts.sizes.medium};
  }

  p {
    margin-top: -20px;
    color: ${(props) => props.theme['base-span']};
    font-size: ${mixin.fonts.sizes.smallPlus};
  }
`
