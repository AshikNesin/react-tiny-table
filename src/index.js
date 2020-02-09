import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Cell from './Cell'

const DatatableWrapper = styled.div`
    position: relative;
`

const ScrollContainer = styled.div`
    /* margin-left: 141px; */
    overflow-x: scroll;
    overflow-y: visible;
    padding-bottom: 5px;
    /* width: 300px; */
`

const Table = styled.table`
    border: none;
    border-right: solid 1px #ddefef;
    border-collapse: separate;
    border-spacing: 0;
    font: normal 13px Arial, sans-serif;

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
        padding: 10px;
        text-shadow: 1px 1px 1px #fff;
        white-space: nowrap;
    }

    th,
    td {
        padding: 0.25rem;
        width: 100%;
    }
    th {
        position: sticky;
        top: 0;
    }

    .is-sticky-col {
        border-left: solid 1px #ddefef;
        border-right: solid 1px #ddefef;
        left: 0;
        position: absolute;
        top: auto;
        width: 120px;
    }
`

export default class ExampleComponent extends Component {
    // TODO: Add propTypes
    static propTypes = {
      dataColumns: PropTypes.array.isRequired,
      dataRows: PropTypes.array.isRequired,
      fixedHeader: PropTypes.bool
    };

    renderHeadingRow = (_cell, cellIndex) => {
      const { dataColumns } = this.props

        return (
        <Cell
          key={`heading-${cellIndex}`}
          content={dataColumns[cellIndex].heading}
          header={true}
        />
      )
    };

    renderRow = (_row, rowIndex) => {
      const { dataColumns } = this.props
        return (
        <tr>
          {dataColumns.map(({ path, sticky = false }, index) => (
            <Cell
              key={`cell-${index}`}
              content={_row[path]}
              sticky={sticky}
            />
          ))}
        </tr>
      )
    };

    render() {
      const dataColumns = this.props.dataColumns
        const dataRows = this.props.dataRows

        const tableHeaders = (
        <thead className='table__header'>
          <tr>{dataColumns.map(this.renderHeadingRow)}</tr>
        </thead>
      )
        const tableBody = dataRows.map(this.renderRow)

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
