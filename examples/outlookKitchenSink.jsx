import React from 'react'
import { Email, Item, Span } from '../src/index'

const heads = <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

const email = (
  <Email title="Test Email" heads={heads}>
    <Item>
      <Span fontSize={15}>Hello, world!</Span>
    </Item>
  </Email>
)

export default email
