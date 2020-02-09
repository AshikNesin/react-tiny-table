import React, { Component } from 'react';

import TinyTable from 'react-tiny-table';
import tableData from './data.json';
export default class App extends Component {
    render() {
        const tableColumns = [
            {
                columnHeader: 'Subscription Info',
                path: 'subscriptionInfo',
                sticky: true
            },
            {
                columnHeader: 'Customer Info',
                path: 'customerInfo'
            },
            {
                columnHeader: 'Next Renewal',
                path: 'nextRenewal'
            },
            {
                columnHeader: 'MRR',
                path: 'mrr'
            },
            {
                columnHeader: 'Created On ',
                path: 'createdOn'
            }
        ];
        return (
            <div>
                <TinyTable dataColumns={tableColumns} dataRows={tableData} />
            </div>
        );
    }
}
