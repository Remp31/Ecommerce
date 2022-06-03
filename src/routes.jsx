import { Navigate, useRoutes } from 'react-router-dom'
import App from './pages/App'

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='products' />
    },
    {
      path: '/products',
      element: <App />
    },
    {
      path: '/404',
      element: <p className='text-center'>Page not found</p>
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  return element
}

export default Paths
