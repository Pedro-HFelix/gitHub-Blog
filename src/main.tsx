import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Blog } from './pages/blog/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
