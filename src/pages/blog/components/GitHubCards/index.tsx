import { GitHubCardsContainer, GitHubCardsSpan } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContextSelector } from 'use-context-selector'
import { IssueContext } from '../../../../contexts/Issues-Context'

export function GitHubCards() {
  const issues = useContextSelector(IssueContext, (context) => {
    return context.filteredIssues
  })

  const formatContent = (text: string) => {
    const formattedText = text
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .join('\n')

    return formattedText.length > 181
      ? formattedText.substring(0, 150) + ' ...'
      : formattedText
  }

  return (
    <>
      {issues.map((issue) => (
        <GitHubCardsContainer key={issue.number}>
          <GitHubCardsSpan>
            <h3>{issue.title}</h3>
            <p>
              {formatDistanceToNow(new Date(issue.created_at), {
                locale: ptBR,
                addSuffix: true,
              })}
            </p>
          </GitHubCardsSpan>
          <p>{formatContent(issue.body)}</p>
        </GitHubCardsContainer>
      ))}
    </>
  )
}
