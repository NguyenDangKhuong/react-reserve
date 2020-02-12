import React from 'react'
import { Header, Button, Modal } from 'semantic-ui-react'
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import { useRouter } from 'next/router';

function ProductAttributes({ description, _id }) {
  const [modal, setModal] = React.useState(false)
  const router = useRouter()
  return <>
    <Header as='h3'>About this product</Header>
    <p>{description}</p>
    <Button 
      icon='trash alternate outline'
      color='red'
      content='Delete Product'
      onClick={() => setModal(true)}
    />
    <Modal open={modal}>
      <Modal.Header>Confirm Delete</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete this product</p>
      </Modal.Content>
      <Modal.Actions>
        <Button 
          content='cancel'
          onClick={() => setModal(false)}
        >
        </Button>
        <Button 
          negative
          icon='trash'
          labelPosition='right'
          content='Delete'
          onClick={async () => {
            const url = `${baseUrl}/api/product`
            const payload = { params: { _id } }
            await axios.delete(url, payload)
            router.push('/')
          }}
        ></Button>
      </Modal.Actions>
    </Modal>
  </>;
}

export default ProductAttributes;
