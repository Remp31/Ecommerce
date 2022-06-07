import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import '../styles/Searchbox.css'
import '../assets/perfil.svg'

const SearchBox = () => {
    const searchRef = useRef()

    const { setQuery } = useAppContext()

    //aqui debo hacer un fetch para obtener el id y luego enviarlo en el set query, del buscador obtengo el nombre del producto

    const handleSubmit = (event) => {
        event.preventDefault()
        setQuery(searchRef.current.value) //acá se debe enviar el id
        searchRef.current.value = ''
    }

    return (
    <nav className='navbar navbar-light search'>
        <div className='container-fluid'>
            { /*<Link className='navbar-brand' to='/products'>Productos</Link> */}
            <form className='d-flex buscador' onSubmit={handleSubmit}>
                <input ref={searchRef} className='form-control me-2 input' type='search' placeholder='QUE DESEA PEDIR' aria-label='Search' />
                <button className='btn btn-outline-success btn-buscar' type='submit'>
                    <img src="./assets/perfil.svg" alt="buscar" />
                </button>
            </form>
            <button className='btn btn-outline-success btn-compras' type='submit'>
                <img src="./assets/bolsa_compra.svg" alt="compras"/>
            </button>
            <button className='btn btn-outline-success btn-perfil' type='submit'>
                <img src="./assets/perfil.svg" alt="perfil"/>
            </button>
        </div>
    </nav>
    )
}

export default SearchBox