import React from 'react'
import { Input } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import axios from 'axios'
import baseUrl from '../../utils/baseUrl'
import cookie from 'js-cookie'


function AddProductToCart ({ user, productId }) {
  const [quantity, setQuantity] = React.useState(1)
  const router = useRouter()

  return <Input
    type='number'
    min='1'
    placeholder='Quantity'
    value={quantity}
    onChange={e => setQuantity(Number(e.target.value))}
    action={user ? {
      color: 'orange',
      content: 'Add To Cart',
      icon: 'plus cart'
      onClick: () => {
        const url = `${baseUrl}/api/cart`
        const payload = { quantity, productId }
        const token = cookie.get('token') 
        const headers = { headers: { Authorization: token } }
        const res = await axios.put(url, payload, headers)

      }
    } : {
      color: 'blue',
      content: 'Sign up to purchase',
      icon: 'signup'
      onClick: () => router.push('/signup')
    }}
  />
}

export default AddProductToCart
