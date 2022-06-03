import { useEffect, useState } from 'react'
import getProducts from '../services'

const useGetProducts = (id = '') => {
  const [listProducts, setListProducts] = useState(id ? {} : [])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: products } = await getProducts(id)
        setListProducts(id ? products[0] : products)
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
