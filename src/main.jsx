import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// styles
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// componentes
// Router
import Paths from './routes'

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
