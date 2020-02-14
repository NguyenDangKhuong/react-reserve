
import { Segment, Header, Button, Icon } from 'semantic-ui-react'

function CartItemList () {
  const user = false

  return <Segment secondary inverted color='teal' textAlign='center' placeholder>
    <Header icon>
      <Icon name='shopping basket' />
      No product in your card. Add some!
    </Header>
    <div>
      {
        user
          ? <Button color='orange'>View product</Button>
          : <Button color='blue'>Login to add product</Button>
      }
    </div>
  </Segment>
}

export default CartItemList
