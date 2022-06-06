import { useEffect, useState } from 'react'
import getProducts from '../services'

const useGetProducts = (id = '') => {
  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: products } = await getProducts(id)
        setListProducts(products)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [id])

  return { listProducts, loading, error }
}

export default useGetProducts
