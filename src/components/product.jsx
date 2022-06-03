import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import useGetProducts from '../hooks/useGetProducts'

const Products = () => {
  const { query } = useAppContext()
  const { listProducts, loading, error } = useGetProducts()
  console.log(listProducts)

  if (error) return <p>{Error}</p>
  if (loading) return <p>Loading</p>

  return (
    <section className='row py-5 gy-4'>
      {listProducts.map((index, key) => (
        <div className='col-12 col-md-6 col-lg-3 col-sm-6' key={key}>
          <article className='card'>
            <h1>Producto: {index.product_name}</h1>
            <p>Precio: {index.price}</p>
            <p>Categoría: {index.price}</p>
            <img className='card-img-top' src={index.image} alt={index.product_name} />
            <Link to={`/${index._id}`}>
              <p>Detalle</p>
            </Link>
          </article>
        </div>
      ))}
    </section>
  )
}

export default Products
