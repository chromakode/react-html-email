import React from 'react'

export default function Box({ children, ...props }) {
  return (
    <table {...props}>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

Box.propTypes = {
  cellPadding: React.PropTypes.number,
  cellSpacing: React.PropTypes.number,
  border: React.PropTypes.string,
  bgcolor: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
  valign: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: React.PropTypes.object,
  children: React.PropTypes.node,
}

Box.defaultProps = {
  cellPadding: 0,
  cellSpacing: 0,
  border: '0',
  align: 'left',
  valign: 'top',
}
