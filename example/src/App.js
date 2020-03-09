import React, { Component } from 'react';

import TinyTable from 'react-tiny-table';
import data from './data.js';
export default class App extends Component {
    render() {
        const columns = [
            {
                title: 'Subscription Info',
                dataIndex: 'subscriptionInfo',
                key: 'subscriptionInfo',
                fixed: 'left'
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
                key: 'mrr',
                fixed: 'left'
            },
            {
                title: 'Created On',
                dataIndex: 'createdOn',
                key: 'createdOn',
                fixed: 'right'
            },
            {
                title: 'Custom Field Right',
                dataIndex: 'customField',
                key: 'customField'
            },
            {
                title: 'Custom Field',
                dataIndex: 'customField',
                key: 'customField'
            },
            {
                title: 'Fixed Column',
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
                title: 'CB Field',
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
            }
        ];
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">
                                            <span data-feather="home" />
                                            Dashboard{' '}
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file" />
                                            Orders
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="shopping-cart" />
                                            Products
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="users" />
                                            Customers
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="bar-chart-2" />
                                            Reports
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="layers" />
                                            Integrations
                                        </a>
                                    </li>
                                </ul>
                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span>Saved reports</span>
                                    <a
                                        className="d-flex align-items-center text-muted"
                                        href="#"
                                        aria-label="Add a new report"
                                    >
                                        <span data-feather="plus-circle" />
                                    </a>
                                </h6>
                                <ul className="nav flex-column mb-2">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" />
                                            Current month
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" />
                                            Last quarter
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" />
                                            Social engagement
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="file-text" />
                                            Year-end sale
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <main
                            role="main"
                            className="col-md-9 ml-sm-auto col-lg-10 px-4"
                        >
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Dashboard</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group mr-2">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-secondary"
                                        >
                                            Share
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-secondary"
                                        >
                                            Export
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                    >
                                        <span data-feather="calendar" />
                                        This week
                                    </button>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <TinyTable
                                    columns={columns}
                                    dataSource={data}
                                />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}
