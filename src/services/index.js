import axios from 'axios'

const baseUrl = 'https://ecomerce-master.herokuapp.com/api/v1/item'

const getProducts = async (id = '') => {
  const setId = id ? `/${id}` : '/'

  const req = await axios.get(baseUrl + setId)
  return req
  console.log(req)
}

export default getProducts
