import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import useGetProducts from '../hooks/useGetProducts'

const Products = () => {
  const { query } = useAppContext()
  const { listProducts, loading, error } = useGetProducts()

  if (error) return <p>{Error}</p>
  if (loading) return <p>Loading</p>

  return (
    <section className='row py-5 gy-4'>
      {listProducts.map((index, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3 card' >
          <article className='card'>
            <img className='card-img-top' src={index.image} alt={index.product_name} width='200' height='200'/>
            <div className='card-body'>
              <h1 className='card-title'>Producto: {index.product_name}</h1>
              <p>Precio: {index.price}</p>
              <p>Categoría: {index.price}</p>
              <Link to={`/${index._id}`}>
                <p>Detalle</p>
              </Link>
            </div>
          </article>
        </div>
      ))}
    </section>
  )
}

export default Products
