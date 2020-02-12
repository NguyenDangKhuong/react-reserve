import React from 'react'
import axios from 'axios'
import ProductList from '../components/Index/ProductList'
import baseUrl from '../utils/baseUrl'

function Home ({ products }) {
  return <ProductList products={products} />
}

Home.getInitialProps = async () => {
  // fecth data from server
  const url = `${baseUrl}/api/products`
  const res = await axios.get(url)
  return { products: res.data }
  // return res data as an object
  // note: this object will be merge with existing props
}

export default Home
