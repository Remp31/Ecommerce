import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import useGetProducts from '../hooks/useGetProducts'
import '../styles/Products.css'

const Products = () => {
  const { query } = useAppContext()
  const { listProducts, loading, error } = useGetProducts(query)

  if (error) return <p>{Error}</p>
  if (loading) return <p>Loading</p>

  return (
    <section className='row py-4 gy-3 prod-home'>
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
