import { useParams } from "react-router-dom"
import useGetProducts from "../hooks/useGetProducts"
import { Link } from "react-router-dom"


const Product = () => {
    const { id = '' } = useParams()
    const { listProducts, loading, error } = useGetProducts(id)

    if (error) return <p>{error}</p>
    if (loading) {
        return (
            <section className="container">
                <p>Loading</p>
            </section>
        )
    }
    // console.log(listProducts.map)
    return (
        <section className="container">
           <p>NO SE COMO PONER LA INFO</p>
           <Link to='/'>
              <p>HOME</p>
            </Link>
        </section>
    )
}

export default Product