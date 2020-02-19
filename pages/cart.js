import React from 'react'
import { Segment } from 'semantic-ui-react'
import CartItemList from '../components/Cart/CartItemList'
import CartSummary from '../components/Cart/CartSummary'
import { parseCookies } from 'nookies'
import axios from 'axios'
import baseUrl from '../utils/baseUrl'
import cookie from 'js-cookie'

function Cart ({ products, user }) {
  const [cartProducts, setCartProducts] = React.useState(products)

  const handleRemoveFromCart = async (productId) => {
    const url = `${baseUrl}/api/cart`
    const token = cookie.get('token')
    const payload = {
      params: { productId },
      headers: { Authorization: token }
    }
    const res = await axios.delete(url, payload)
    setCartProducts(res.data)
  }

  return <Segment>
    <CartItemList handleRemoveFromCart={handleRemoveFromCart} user={user} products={cartProducts} />
    <CartSummary products={cartProducts} />
  </Segment>
}

Cart.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx)
  if (!token) {
    return { product: [] }
  }
  const url = `${baseUrl}/api/cart`
  const payload = { headers: { Authorization: token } }
  const res = await axios.get(url, payload)
  return { products: res.data }
}

export default Cart
