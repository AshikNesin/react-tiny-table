# react-tiny-table

> Simple table library for React

[![NPM](https://img.shields.io/npm/v/react-tiny-table.svg)](https://www.npmjs.com/package/react-tiny-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tiny-table
```

## Usage

```jsx
import React, { Component } from 'react'

import TinyTable from 'react-tiny-table'

 const columns = [
            {
                title: 'Subscription Info',
                dataIndex: 'subscriptionInfo',
                key: 'subscriptionInfo',
                fixed: 'left' // To make it fixed (left)
            },
            {
                title: 'Customer Info',
                dataIndex: 'customerInfo',
                key: 'customerInfo'
            },
            {
                title: 'MRR',
                dataIndex: 'mrr',
                key: 'mrr'
            },
            {
                title: 'Created On',
                dataIndex: 'createdOn',
                key: 'createdOn',
                fixed: 'right'
                // To make it fixed (right)
            },
            {
                title: 'Custom Field Right',
                dataIndex: 'customField',
                key: 'customField'
            }
];

const dataset = [
    {
        subscriptionInfo: 'Ashik Nesin',
        customerInfo: 'cloud---entry',
        customerEmail: 'mail@ashiknesin.com',
        customerWebsite: 'https://nesin.io',
        nextRenewal: '17 Feb 2020',
        mrr: '$50.00 USD',
        createdOn: '22 Jan 2020',
        customField: 'Demo'
    }
];

const data =  Array.from({ length: 50 }).map(x => dataset[0]);

class TinyTableDemo extends Component {
  render () {
    return (
        <TinyTable columns={columns} dataSource={data} />
    )
  }
}
```

## License

MIT © [AshikNesin](https://github.com/AshikNesin)
