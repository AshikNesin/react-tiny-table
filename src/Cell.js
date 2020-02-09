import React from 'react'
import styled from '@emotion/styled'

const ContainerFragment = styled(React.Fragment)`
    .cell {
        border: 1px solid #f4f6f8;
        padding: 4px;
        text-align: left;
    }
`

const Cell = props => {
  const { content, header, sticky } = props
    const markup = header ? (
    <th
      className={`cell cell__header ${sticky ? ' is-sticky-col ' : ''}`}
      {...props}
    >
      {content}
    </th>
  ) : (
    <td className={`cell ${sticky ? ' is-sticky-col ' : ''}`} {...props}>
      {content}
    </td>
  )
    return <ContainerFragment>{markup}</ContainerFragment>
};

export default Cell
