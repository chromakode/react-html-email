import React from 'react'

import Box from './Box'
import Item from './Item'

// inspired by http://htmlemailboilerplate.com
export default function Email(props) {
  // default nested 600px wide outer table container (see http://templates.mailchimp.com/development/html/)
  return (
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{props.title}</title>
      </head>
      <body style={{
        width: '100%',
        margin: '0',
        padding: '0',
        WebkitTextSizeAdjust: '100%',
        MsTextSizeAdjust: '100%',
      }}>
        <Box width="100%" height="100%" bgcolor={props.bgcolor}>
          <Item align="center" valign="top">
            <Box width="600" align="center" cellPadding={props.cellPadding} cellSpacing={props.cellSpacing} style={props.style}>
              {props.children}
            </Box>
          </Item>
        </Box>
      </body>
    </html>
  )
}

Email.propTypes = {
  title: React.PropTypes.string.isRequired,
  bgcolor: React.PropTypes.string,
  cellPadding: React.PropTypes.number,
  cellSpacing: React.PropTypes.number,
  style: React.PropTypes.object,
  children: React.PropTypes.node,
}
