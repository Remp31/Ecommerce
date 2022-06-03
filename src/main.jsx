import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// styles
import './styles/index.css'
// componentes
// Router
import Paths from './routes'
import { BrowserRouter } from 'react-router-dom'

// Context Provider
import { ContextProvider } from './context'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Paths />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
)
