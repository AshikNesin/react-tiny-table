import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const DatatableWrapper = styled.div`
  max-width: 100vw;
  position: relative;
`

const ScrollContainer = styled.div`
  overflow-x: visible;
`

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

    /* Make the header sticky.  */
    position: sticky;
    top: 0;
    z-index: 1;
    overflow: hidden;
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

  thead th {
    /* Make the header sticky.  */
    position: sticky;
    top: 0;
    z-index: 1;
    overflow: hidden;
  }

  th:first-child {
    background-repeat: repeat-x;
    background-position: 100%;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    z-index: 1;
  }

  td:first-child {
    background: #fff;
    background-repeat: repeat-y;
    background-position: 100%;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    z-index: 1;
  }

  th:first-child {
    z-index: 2 !important;
  }
`

export default class ExampleComponent extends Component {
  state = {
    orderedColumns: null
  };
  static propTypes = {
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props)
    // TODO: Order columns based on whether it's fixed or not. And whether it's left or right
    this.orderedColumns = props.columns
    this.tableData = props.dataSource
  }

  renderHeadingRow = ({ title, key }) => {
    return <th key={key}>{title}</th>
  };

  renderRow = (_row, rowIndex) => {
    return (
      <tr key={`row-${rowIndex}`}>
        {this.orderedColumns.map((_cell, cellIndex) => {
          return (
            <td key={`${rowIndex}-${cellIndex}`}>{_row[_cell.dataIndex]}</td>
          )
        })}
      </tr>
    )
  };

  render() {
    const theadMarkup = (
      <tr key='heading'>{this.orderedColumns.map(this.renderHeadingRow)}</tr>
    )
    const tbodyMarkup = this.tableData.map(this.renderRow)

    return (
      <DatatableWrapper>
        <ScrollContainer>
          <StyledTable>
            <thead>{theadMarkup}</thead>
            {tbodyMarkup}
            <tbody />
          </StyledTable>
        </ScrollContainer>
      </DatatableWrapper>
    )
  }
}
