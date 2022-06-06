import { useParams } from "react-router-dom"
import useGetProducts from "../hooks/useGetProducts"
import { Link } from "react-router-dom"
import SearchBox from "../components/Searchbox"
import { useEffect } from "react"
import useAppContext from "../hooks/useAppContext"


const Product = () => {
    const { id = '' } = useParams()
    const { setQuery} = useAppContext()
    const { listProducts, loading, error } = useGetProducts(id)
    
    useEffect(() => {
            return () => {
                setQuery('')
            }
        },[])

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
        </section>
    )
}

export default Product