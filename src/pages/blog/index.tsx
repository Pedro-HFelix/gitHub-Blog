import { Profile } from '../../components/Profile'
import { GitHubCards } from './components/GitHubCards'
import { SearchBlog } from './components/SearchBlog'
import { BlogMainContainer, TitleContainer } from './styles'

export function Blog() {
  return (
    <BlogMainContainer>
      <Profile />
      <TitleContainer>
        <h3>Publicações</h3>
        <span>6 publicacoes</span>
      </TitleContainer>
      <SearchBlog />

      <GitHubCards />
    </BlogMainContainer>
  )
}
