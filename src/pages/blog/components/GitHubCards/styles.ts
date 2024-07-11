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

  margin-bottom: 32px;
  border-radius: 10px;

  &:last-child {
    color: ${(props) => props.theme['base-text']};

    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${mixin.fonts.sizes.medium};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    padding: 30px;
  }
`

export const GitHubCardsSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 16px;

  h3 {
    flex: 1;
    color: ${(props) => props.theme['base-title']};
    font-size: ${mixin.fonts.sizes.mediumPlus};
  }

  p {
    width: 70px;
    color: ${(props) => props.theme['base-span']};
    font-size: ${mixin.fonts.sizes.smallPlus};
  }
`
