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
    <section className='row gy-3 prod-home'>
      {listProducts.map((index, key) => (
        <div key={key} className='col-lg-3 prod-cont' >
          <article className='card prod'>
            <img className='card-img-top img-prod' src={index.image} alt={index.product_name}/>
            <div className='card-body'>
              <h1 className='card-title name-prod'>{index.product_name}</h1>
              <div className='det-prod'>
                <Link to={`/${index._id}`}>
                  <p>S/. {index.price}</p>
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </section>
  )
}

export default Products
