import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import css from '@emotion/css'

const DatatableWrapper = styled.div`
  max-width: 100vw;
  position: relative;
`

const ScrollContainer = styled.div`
  overflow-x: visible;
  overflow-y: visible;
`
const fixedHeaderStyle = props => {
  console.log({props})
  return css`
  thead th {
    position: sticky;
    top: 0;
    z-index: 1;
    overflow: hidden;
  }
  `
}

const StyledTable = styled.table`
  width: 100%;
  font-size: 14px;
  border-spacing: 0;
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);

  thead th {
    background-color: #ddefef;
    border: none;
    color: #336b6b;
    padding: 10px;
    text-align: left;
    text-shadow: 1px 1px 1px #fff;
    white-space: nowrap;
  }

  tbody td {
    border-bottom: solid 1px #ddefef;
    color: #333;
    text-shadow: 1px 1px 1px #fff;
    white-space: nowrap;
  }

  th,
  td {
    padding: 4px 10px;
  }



  th:nth-child(1) {
    background-repeat: repeat-x;
    background-position: 100%;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    z-index: 1;
  }

  td:nth-child(1) {
    background: #fff;
    background-repeat: repeat-y;
    background-position: 100%;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    z-index: 1;
  }

  th:nth-child(1) {
    z-index: 2 !important;
  }
  ${fixedHeaderStyle};
`

const sortColumns = (columns) => {
  const fixedLeftColumns = columns.filter(item => {
    if (!item.fixed) {
      return false
    }
    return item.fixed === 'left'
  })

  const fixedRightColumns = columns.filter(item => {
    if (!item.fixed) {
      return false
    }
    return item.fixed === 'right'
  })

  const nonFixedColumns = columns.filter(item => !item.fixed)
  const sortedColumns = [...fixedLeftColumns, ...nonFixedColumns, ...fixedRightColumns]
  return sortedColumns
}
export default class TinyTable extends Component {
  state = {
    sortedColumns: null
  };
  static propTypes = {
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props)
    this.sortedColumns = sortColumns(props.columns)
    this.tableData = props.dataSource
  }

  renderHeadingRow = ({ title, key }) => {
    return <th key={key}>{title}</th>
  };

  renderRow = (_row, rowIndex) => {
    return (
      <tr key={`row-${rowIndex}`}>
        {this.sortedColumns.map((_cell, cellIndex) => {
          return (
            <td key={`${rowIndex}-${cellIndex}`}>{_row[_cell.dataIndex]}</td>
          )
        })}
      </tr>
    )
  };

  render() {
    const theadMarkup = (
      <tr key='heading'>{this.sortedColumns.map(this.renderHeadingRow)}</tr>
    )
    const tbodyMarkup = this.tableData.map(this.renderRow)

    return (
      <DatatableWrapper>
        <ScrollContainer>
          <StyledTable fixedColumns={[1, 23]}>
            <thead>{theadMarkup}</thead>
            {tbodyMarkup}
            <tbody />
          </StyledTable>
        </ScrollContainer>
      </DatatableWrapper>
    )
  }
}
