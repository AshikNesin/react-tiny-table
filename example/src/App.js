import React, { Component } from 'react';

import TinyTable from 'react-tiny-table';
import data from './data.json';
export default class App extends Component {
    render() {
        const columns = [
            {
                title: 'Subscription Info',
                dataIndex: 'subscriptionInfo',
                key: 'subscriptionInfo'
            },
            {
                title: 'Customer Info',
                dataIndex: 'customerInfo',
                key: 'customerInfo'
            },
            {
                title: 'Customer Email',
                dataIndex: 'customerEmail',
                key: 'customerEmail'
            },
            {
                title: 'Customer Website',
                dataIndex: 'customerWebsite',
                key: 'customerWebsite'
            },
            {
                title: 'Next Renewal',
                dataIndex: 'nextRenewal',
                key: 'nextRenewal'
            },
            {
                title: 'MRR',
                dataIndex: 'mrr',
                key: 'mrr'
            },
            {
                title: 'Created On',
                dataIndex: 'createdOn',
                key: 'createdOn'
            },
            {
                title: 'Custom Field',
                dataIndex: 'customField',
                key: 'customField'
            },
            {
                title: 'Custom Field',
                dataIndex: 'customField',
                key: 'customField'
            },
            {
                title: 'Custom Field',
                dataIndex: 'customField',
                key: 'customField'
            },
            {
                title: 'Custom Field',
                dataIndex: 'customField',
                key: 'customField'
            },
            {
                title: 'Custom Field',
                dataIndex: 'customField',
                key: 'customField'
            },
            {
                title: 'Custom Field',
                dataIndex: 'customField',
                key: 'customField'
            },
            {
                title: 'Custom Field',
                dataIndex: 'customField',
                key: 'customField'
            },
            {
                title: 'Custom Field',
                dataIndex: 'customField',
                key: 'customField'
            },
            {
                title: 'Custom Field',
                dataIndex: 'customField',
                key: 'customField'
            },


        ];
        return (
            <div style={{maxWidth:'80%'}}>
                <TinyTable columns={columns} dataSource={data} />
            </div>
        );
    }
}
