import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { IssuesProvider } from './contexts/Issues-Context'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <IssuesProvider>
        <Outlet />
      </IssuesProvider>
    </ThemeProvider>
  )
}
