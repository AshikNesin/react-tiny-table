import styled from '@emotion/styled'
import css from '@emotion/css'

export const TableScrollContainer = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: auto;
    overflow: auto;
    height: 100vh;
    /* Hide scrollbar */
    &::-webkit-scrollbar {
        /* display: none; */
    }
`

export const getFixedHeaderStyle = props => {
  return css`
        thead th {
            position: sticky;
            top: 0;
            z-index: 1;
            overflow: visible;
        }
    `
};
export const getFixedColumnsStyle = ({ fixedColumns }) => {
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

export const StyledTable = styled.table`
    width: 100%;
    font-size: 14px;
    border-spacing: 0;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
    margin: auto;

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

    ${getFixedHeaderStyle};
    ${getFixedColumnsStyle};
`
