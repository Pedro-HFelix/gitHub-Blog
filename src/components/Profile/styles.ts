import styled from 'styled-components'
import { mixin } from '../../styles/mixins'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  max-width: 864px;
  height: 212px;

  margin: 0 auto;
  margin-top: -5rem;
  padding: 32px 32px 32px 40px;

  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  img {
    border-radius: 8px;
    height: 148px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    a {
      display: flex;
      align-items: center;
      gap: 8px;

      font-size: ${mixin.fonts.sizes.smallPlus};

      svg {
        font-size: ${mixin.fonts.sizes.small};
      }
    }
  }
`

export const ProfileDescription = styled.p`
  max-width: 612px;
  margin-top: 8px;
  white-space: pre-line;
`

export const ProfileInfo = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;

  p {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      font-size: 16px;
    }
  }
`
