import React, { memo } from 'react'
import RemoveHiddenDOMFromView from './RemoveHiddenDOMFromView'

const Item = memo(({ rowIndex, columns, _row }) => (
  <RemoveHiddenDOMFromView
    wrapper='tr'
    key={`row-${rowIndex}`}
    options={{
      root: null, // To listen to window scroll
      rootMargin: '100px 0px' // if there is any margin associated with it
      // threshold: 0.5
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
