import { Link } from 'react-router-dom'

const SearchBox = () => {
    return (
    <nav className='navbar navbar-light bg-light'>
    <div className='container-fluid'>
        <Link className='navbar-brand' to={'/products'}>Productos</Link>
        <form className='d-flex'>
        <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
        <button className='btn btn-outline-success' type='submit'>Search</button>
        <button className='btn btn-outline-success' type='submit'>Carrito</button>
        <button className='btn btn-outline-success' type='submit'>Perfil</button>
        </form>
    </div>
    </nav>
    )
}

export default SearchBox