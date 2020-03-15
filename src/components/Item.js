import React, { memo } from 'react'
import RemoveHiddenDOMFromView from './RemoveHiddenDOMFromView'

const Item = memo(({ rowIndex, columns, _row }) => (
  <RemoveHiddenDOMFromView
    wrapper='tr'
    key={`row-${rowIndex}`}
    options={{
      root: document.querySelector('#scrollArea'),
      rootMargin: '100px 100px'
      // threshold: 0.2
    }}
  >
    {columns.map((_cell, cellIndex) => {
      return (
        <td key={`${rowIndex}-${cellIndex}`}>
          {_row[_cell.dataIndex]} row - {rowIndex}
        </td>
      )
        })}
  </RemoveHiddenDOMFromView>
))

export default Item
