import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Issue {
  number: number
  title: string
  body: string
  created_at: Date
}

interface IssueContextType {
  issues: Issue[]
  filteredIssues: Issue[]
  fetchIssues: (query?: string) => Promise<void>
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(
    async (query?: string) => {
      const response = await api.get('/repos/Pedro-HFelix/gitHub-Blog/issues')
      console.log(response.data)
      setIssues(response.data)

      if (query) {
        const filtered = issues.filter((issue) => {
          return issue.title.toLowerCase().includes(query.toLowerCase())
        })

        setFilteredIssues(filtered)
      }
    },
    [issues],
  )

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssueContext.Provider value={{ issues, filteredIssues, fetchIssues }}>
      {children}
    </IssueContext.Provider>
  )
}
