import React, { PropTypes } from 'react'
import EmailPropTypes from '../PropTypes'
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
        {props.headCSS && <style type="text/css">{props.headCSS}</style>}
      </head>
      <body style={{
        width: '100%',
        margin: 0,
        padding: 0,
        WebkitTextSizeAdjust: '100%',
        MsTextSizeAdjust: '100%'
      }}>
        <Box width="100%" height="100%" bgcolor={props.bgcolor}>
          <Item align={props.align} valign={props.valign}>
            <Box width={props.width} align="center" cellPadding={props.cellPadding} cellSpacing={props.cellSpacing} style={props.style}>
              {props.children}
            </Box>
          </Item>
        </Box>
      </body>
    </html>
  )
}

Email.propTypes = {
  title: PropTypes.string.isRequired,
  bgcolor: PropTypes.string,
  cellPadding: PropTypes.number,
  cellSpacing: PropTypes.number,
  style: EmailPropTypes.style,
  headCSS: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom'])
};

Email.defaultProps = {
  width: '600',
  align: 'center',
  valign: 'top'
};