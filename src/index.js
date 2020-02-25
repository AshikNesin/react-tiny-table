import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Cell from './Cell'

const DatatableWrapper = styled.div`
  max-width: 100vw;
  position: relative;
`

const ScrollContainer = styled.div`
  overflow-x: auto;
`

const Table = styled.table`
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
    padding: 0.25rem;
    width: 100%;
  }

`

export default class ExampleComponent extends Component {
  // TODO: Add propTypes
  static propTypes = {
    dataColumns: PropTypes.array.isRequired,
    dataRows: PropTypes.array.isRequired
  };

  renderHeadingRow = (_cell, cellIndex) => {
    const { dataColumns } = this.props

    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={dataColumns[cellIndex].heading}
        header={true}
        // width={_row['width']}
      />
    )
  };

  renderRow = (_row, rowIndex) => {
    const { dataColumns } = this.props
    return (
      <tr>
        {dataColumns.map(({ path, sticky }, index) => (
          <Cell
            key={`cell-${index}`}
            content={_row[path]}
            sticky={sticky || false}
            width={_row['width']}
          />
        ))}
      </tr>
    )
  };

  render() {
    const dataColumns = this.props.dataColumns
    const dataRows = this.props.dataRows

    const tableHeaders = (
      <thead>
        <tr>{dataColumns.map(this.renderHeadingRow)}</tr>
      </thead>
    )
    const tableBody = <tbody>{dataRows.map(this.renderRow)}</tbody>

    return (
      <DatatableWrapper>
        <ScrollContainer>
          <Table>
            {tableHeaders}
            {tableBody}
          </Table>
        </ScrollContainer>
      </DatatableWrapper>
    )
  }
}
