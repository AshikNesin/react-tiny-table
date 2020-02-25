import React from 'react'

const Cell = props => {
  const { content, header, sticky, width } = props
  let className = 'cell '
  sticky && (className = className + ' cell-fixed ')
  header && (className = className + ' cell-header ')

  let style = {}

  if (width) {
    style.width = width
  }

  const markup = header ? (
    <th className={className} style={style} {...props}>
      {content}
    </th>
  ) : (
    <td className={className} style={style} {...props}>
      {content}
    </td>
  )
  return markup
}

export default Cell
