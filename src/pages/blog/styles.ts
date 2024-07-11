import styled from 'styled-components'

export const BlogMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 864px;
  margin: 0 auto;
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 72px;
`
export const GitHubCardsContainerGroup = styled.div`
  width: 100%;

  margin-top: 48px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`
