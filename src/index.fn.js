/* eslint-disable */
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import { sortColumns } from './utils';

import { TableScrollContainer, StyledTable } from './tableStyles';

import Item from './components/Item';

const TinyTable = props => {
    const sortedColumns = sortColumns(props.columns);
    const tableData = props.dataSource;
    const tableHeaderRefs = {};

    const [fixedColumnsState, setFixedColumns] = useState([]);
    useEffect(() => {
        const fixedColumns = [];
        sortedColumns.map(({ dataIndex, fixed }, columnIndex) => {
            if (
                fixed &&
                tableHeaderRefs[dataIndex] &&
                tableHeaderRefs[dataIndex].current
            ) {
                const width = tableHeaderRefs[
                    dataIndex
                ].current.getBoundingClientRect().width;
                fixedColumns.push({
                    dataIndex,
                    fixed,
                    nthChildIndex: columnIndex + 1,
                    width: width
                });
                setFixedColumns(fixedColumns);
            }
        });
    }, []);

    const renderHeadingRow = ({ title, key, dataIndex, fixed }, cellIndex) => {
        if (fixed === 'right' || fixed === 'left') {
            tableHeaderRefs[dataIndex] = React.createRef();
        }
        return (
            <th key={key || cellIndex} ref={tableHeaderRefs[dataIndex]}>
                {title}
            </th>
        );
    };
    const renderRow = (_row, rowIndex) => {
        return <Item columns={sortedColumns} _row={_row} rowIndex={rowIndex} />;
    };

    const theadMarkup = (
        <tr key="heading">{sortedColumns.map(renderHeadingRow)}</tr>
    );
    const tbodyMarkup = tableData.map(renderRow);

    return (
        <TableScrollContainer id="scrollArea">
            <StyledTable fixedColumns={fixedColumnsState}>
                <thead>{theadMarkup}</thead>
                <tbody>{tbodyMarkup}</tbody>
            </StyledTable>
        </TableScrollContainer>
    );
};

export default TinyTable;
