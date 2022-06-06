import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'

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
    <nav className='navbar navbar-light bg-light'>
    <div className='container-fluid'>
        <Link className='navbar-brand' to='/products'>Productos</Link>
        <form className='d-flex' onSubmit={handleSubmit}>
            <input ref={searchRef} className='form-control me-2' type='search' placeholder='Busca productos' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>Ir</button>
        </form>
        <button className='btn btn-outline-success' type='submit'>Carrito</button>
        <button className='btn btn-outline-success' type='submit'>Perfil</button>
    </div>
    </nav>
    )
}

export default SearchBox