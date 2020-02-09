import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
    // TODO: Add propTypes
    static propTypes = {
      dataColumns: PropTypes.array.isRequired,
      dataRows: PropTypes.array.isRequired
    };

    render() {
      const dataColumns = this.props.dataColumns
        const dataRows = this.props.dataRows

        const tableHeaders = (
        <thead>
          <tr>
            {dataColumns.map(({ columnHeader }) => (
              <th>{columnHeader}</th>
            ))}
          </tr>
        </thead>
      )

        const tableBody = dataRows.map(row => {
        return (
          <tr>
            {dataColumns.map(
              ({ columnHeader, path, sticky = false }) => (
                <th>{row[path]}</th>
              )
            )}
          </tr>
        )
        })

        return (
        <div className='DataTable'>
          <div className='ScrollContainer'>
            <table className='Table'>
              {tableHeaders}
              {tableBody}
            </table>
          </div>
        </div>
      )
    }
}
