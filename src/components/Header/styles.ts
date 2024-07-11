import styled from 'styled-components'
import gitHubBlogImage from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  background-image: url(${gitHubBlogImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 286px;

  @media (max-width: 1200px) {
    height: 246px;
  }

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`
