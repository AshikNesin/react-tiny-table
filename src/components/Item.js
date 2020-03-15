import React, { memo } from 'react'

const Item = memo(({ rowIndex, columns, _row, id, style }) => {
  return columns.map((_cell, cellIndex) => {
    return (
      <td key={`${rowIndex}-${cellIndex}`}>
        {_row[_cell.dataIndex]} row - {rowIndex}
      </td>
    )
    })
})

export default Item
