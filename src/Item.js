import React, { memo } from 'react'

const Item = memo(({ rowIndex, columns, _row }) => (
  <tr
    key={`row-${rowIndex}`}
    style={{
      willChange: 'transform',
      transform: `translateY(${offsetY}px)`
    }}
  >
    {columns.map((_cell, cellIndex) => {
      return (
        <td key={`${rowIndex}-${cellIndex}`}>
          {_row[_cell.dataIndex]}
        </td>
      )
        })}
  </tr>
))

export default Item
