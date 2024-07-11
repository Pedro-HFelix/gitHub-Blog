import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormBlogContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { IssueContext } from '../../../../contexts/Issues-Context'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchBlog() {
  const fetchIssues = useContextSelector(IssueContext, (context) => {
    return context.fetchIssues
  })

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchBlog(data: SearchFormInputs) {
    fetchIssues(data.query)
  }

  return (
    <FormBlogContainer onSubmit={handleSubmit(handleSearchBlog)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </FormBlogContainer>
  )
}
