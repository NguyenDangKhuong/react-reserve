import React from 'react'
import { Segment, Divider, Button } from 'semantic-ui-react'

function CartSummary ({ products }) {
  const [isCartEmpty, setIsCartEmpty] = React.useState(false)
  React.useState(() => {
    setIsCartEmpty(products.length === 0)
  },[products])

  return <>
    <Divider />
    <Segment clearing size='large'>
    <strong>Sub total:</strong> $0.00
    <Button icon='cart' disabled={isCartEmpty} color='teal' floated='right' content='Checkout' />
    </Segment>
  </>
}

export default CartSummary
