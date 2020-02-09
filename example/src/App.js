import React, { Component } from 'react';

import TinyTable from 'react-tiny-table';
import tableData from './data.json';
export default class App extends Component {
    render() {
        const tableColumns = [
            {
                heading: 'Subscription Info',
                path: 'subscriptionInfo',
                sticky: true
            },
            {
                heading: 'Customer Info',
                path: 'customerInfo'
            },
            {
                heading: 'Customer Info',
                path: 'customerInfo'
            },
            {
                heading: 'Customer Info',
                path: 'customerInfo'
            },
            {
                heading: 'Customer Info',
                path: 'customerInfo'
            },
            {
                heading: 'Customer Info',
                path: 'customerInfo'
            },
            {
                heading: 'Next Renewal',
                path: 'nextRenewal'
            },
            {
                heading: 'MRR',
                path: 'mrr'
            },
            {
                heading: 'Created On ',
                path: 'createdOn'
            },
            {
                heading: 'Customer Info',
                path: 'customerInfo'
            },
            {
                heading: 'Customer Info',
                path: 'customerInfo'
            },
            {
                heading: 'Customer Info',
                path: 'customerInfo'
            },
            {
                heading: 'Customer Info',
                path: 'customerInfo'
            }
        ];
        return (
            <div>
                <TinyTable dataColumns={tableColumns} dataRows={tableData} />
            </div>
        );
    }
}
