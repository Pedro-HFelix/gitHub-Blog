import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormBlogContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchBlog() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchBlog(data: SearchFormInputs) {
    console.log(data)
  }

  return (
    <FormBlogContainer onSubmit={handleSubmit(handleSearchBlog)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </FormBlogContainer>
  )
}
