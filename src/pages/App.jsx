import '../styles/App.css'
import Products from '../components/product'
import SearchBox from '../components/Searchbox'

function App () {
  return (
    <>
      <div className='App container'>
        <SearchBox />
        <Products />
      </div>
    </>
  )
}

export default App
