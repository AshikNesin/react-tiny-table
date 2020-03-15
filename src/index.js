import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { sortColumns } from './utils'

import { TableScrollContainer, StyledTable } from './tableStyles'

import Item from './components/Item'
import RenderIfVisible from './components/RenderIfVisible'
export default class TinyTable extends Component {
    static propTypes = {
      columns: PropTypes.array.isRequired,
      dataSource: PropTypes.array.isRequired
    };

    constructor(props) {
      super(props)
        this.sortedColumns = sortColumns(props.columns)
        this.tableData = props.dataSource
        this.tableHeaderRefs = {}
        this.state = {
        fixedColumns: []
      }
    }
    componentDidMount = () => {
      const fixedColumns = []
        this.sortedColumns.map(({ dataIndex, fixed }, columnIndex) => {
        if (
          fixed &&
                this.tableHeaderRefs[dataIndex] &&
                this.tableHeaderRefs[dataIndex].current
        ) {
          const width = this.tableHeaderRefs[
            dataIndex
          ].current.getBoundingClientRect().width
                fixedColumns.push({
            dataIndex,
            fixed,
            nthChildIndex: columnIndex + 1,
            width: width
          })
                this.setState({ fixedColumns })
            }
      })
    };

    renderHeadingRow = ({ title, key, dataIndex, fixed }, cellIndex) => {
      if (fixed === 'right' || fixed === 'left') {
        this.tableHeaderRefs[dataIndex] = React.createRef()
        }
      return (
        <th key={key || cellIndex} ref={this.tableHeaderRefs[dataIndex]}>
          {title}
        </th>
      )
    };

    renderRow = (_row, rowIndex) => {
      return (
        <RenderIfVisible
          wrapper='tr'
          options={{
            root: document.querySelector('#scrollArea'),
            rootMargin: '0px' // if there is any margin associated with it,
          }}
        >
          <Item
            columns={this.sortedColumns}
            _row={_row}
            rowIndex={rowIndex}
          />
        </RenderIfVisible>
      )
    };

    render() {
      const theadMarkup = (
        <tr key='heading'>
          {this.sortedColumns.map(this.renderHeadingRow)}
        </tr>
      )
        const tbodyMarkup = this.tableData.map(this.renderRow)

        return (
        <TableScrollContainer id='scrollArea'>
          <StyledTable fixedColumns={this.state.fixedColumns}>
            <thead>{theadMarkup}</thead>
            <tbody>{tbodyMarkup}</tbody>
          </StyledTable>
        </TableScrollContainer>
      )
    }
}
