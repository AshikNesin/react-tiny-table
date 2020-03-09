import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import css from '@emotion/css'

const DatatableWrapper = styled.div`
    max-width: 100vw;
    position: relative;
    overflow: scroll;
`

const ScrollContainer = styled.div`
    overflow-x: visible;
    overflow-y: visible;
`
const fixedHeaderStyle = props => {
  return css`
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            overflow: visible;
        }
    `
};

const fixedColumnsStyle = ({ fixedColumns }) => {
  console.log(`calling fixedColumnsStyle()`)
    const leftColumns = fixedColumns.filter(item => item.fixed === 'left')
    const rightColumns = fixedColumns.filter(item => item.fixed === 'right')
    const getStyleForFixedColumn = ({ column, positioning = 0 }) => {
    if (!column) {
      return ''
        }

    return `th:nth-child(${column.nthChildIndex}) {
      background-repeat: repeat-x;
      background-position: 100%;
      position: -webkit-sticky;
      position: sticky;
      ${column.fixed}: ${positioning}px;
      z-index: 1;
    }

    td:nth-child(${column.nthChildIndex}) {
      background: #fff;
      background-repeat: repeat-y;
      background-position: 100%;
      position: -webkit-sticky;
      position: sticky;
      ${column.fixed}: ${positioning}px;
      z-index: 1;
    }

    th:nth-child(${column.nthChildIndex}) {
      z-index: 2 !important;
    }
    `
    };

  // console.log({leftColumns, rightColumns})

  let style = ``

    if (leftColumns.length) {
    let leftPositioning = 0
        leftColumns.map(column => {
      style =
                style +
                getStyleForFixedColumn({
                  column,
                  positioning: leftPositioning
                })
            leftPositioning = leftPositioning + column.width
        })
    }

  if (rightColumns.length) {
    let rightPositioning = 0
        rightColumns.reverse().map(column => {
      style =
                style +
                getStyleForFixedColumn({
                  column,
                  positioning: rightPositioning
                })
            rightPositioning = rightPositioning + column.width
        })
    }

  return css`
        ${style}
    `
};

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
        word-break: break-all;
    }

    th,
    td {
        padding: 4px 10px;
    }

    ${fixedHeaderStyle};
    ${fixedColumnsStyle};
`

const sortColumns = columns => {
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
    const sortedColumns = [
    ...fixedLeftColumns,
    ...nonFixedColumns,
    ...fixedRightColumns
  ]
    return sortedColumns
};
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
      console.log(`calling componentDidMount()`)

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
        <tr key={`row-${rowIndex}`}>
          {this.sortedColumns.map((_cell, cellIndex) => {
            return (
              <td key={`${rowIndex}-${cellIndex}`}>
                {_row[_cell.dataIndex]}
              </td>
            )
                })}
        </tr>
      )
    };

    render() {
      console.log(`calling render()`)

        const theadMarkup = (
        <tr key='heading'>
          {this.sortedColumns.map(this.renderHeadingRow)}
        </tr>
      )
        const tbodyMarkup = this.tableData.map(this.renderRow)

        return (
        <DatatableWrapper>
          <ScrollContainer>
            <StyledTable fixedColumns={this.state.fixedColumns}>
              <thead>{theadMarkup}</thead>
              {/* <tbody>{tbodyMarkup}</tbody> */}
              {tbodyMarkup}
            </StyledTable>
          </ScrollContainer>
        </DatatableWrapper>
      )
    }
}
