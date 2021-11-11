import React, { useState, useEffect, useCallback } from 'react';
import lodash from 'lodash';
import { jsx, css } from '@emotion/react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

import { Images, Colors, FontStyles } from 'constant';
import { Text } from 'components';
import { useTable, usePagination, useSortBy, useRowSelect  } from 'react-table';

import {
  TableWrapper,
  CheckBox
} from './style';

const TableOverview = props => {
  const {
    columns,
    data,
    headerProps,
    sortedHeader,
    setSortedHeader,
    whichSorted,
    customWidth,
    scrollX,
    pageIndexParent,
    total,
    pageCount: controlledPageCount,
  } = props;



  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    prepareRow,
    footerGroups,
    selectedFlatRows,
    state: { selectedRowIds, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data
    },
    useSortBy,
  );

  return (
    <TableWrapper
      customWidth={ customWidth }
      scrollX={ scrollX }
    >
      <div className='tableWrap scroll-custom'>
        <table { ...getTableProps() }>
          <thead>
            {// Loop over the header rows
            headerGroups.map((headerGroup, i) => (
              // Apply the header row props
              <tr
                key={ i }
                { ...headerGroup.getHeaderGroupProps({
                    className: 'header'
                }) }
              >
                {// Loop over the headers in each row
                headerGroup.headers.map((column, j) => {
                  return (
                    // Apply the header cell props
                    <th
                      key={ j }
                      { ...column.getHeaderProps(
                        headerProps(column, headerGroup, j, i)
                        // headerProps(column, headerGroup, j, i)
                      ) }

                    >
                      <span
                        style={ { display: 'flex' } }
                        className='header-container'
                      >
                        {// Render the header
                        column.render('Header')
                        }
                        {
                          whichSorted(headerGroup, headerGroups, j, i) &&
                          // (headerGroup.headers.length - 1 !== j  || headerGroups.length - 1 === i) &&
                          <img
                            src={
                              sortedHeader[`${column.id}`] === true
                              ?
                              Images.icons.up
                              :
                              sortedHeader[`${column.id}`] === false
                                ?
                                Images.icons.down
                                :
                                Images.icons.downGrey
                            }
                            alt=''
                            onClick={ () => {
                              setSortedHeader(
                                // setSorting(id)
                                {
                                  [`${column.id}`]: sortedHeader[`${column.id}`]
                                  ?
                                  !sortedHeader[`${column.id}`]
                                  : true,
                                  id: j
                                }
                              );
                            } }
                          />
                        }
                      </span>
                    </th>
                  );
                  }
                )}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody { ...getTableBodyProps() }>
            {// Loop over the table rows
            rows.map((row, i) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr
                  key={ i }
                  { ...row.getRowProps() }
                >
                  {// Loop over the rows cells
                  row.cells.map((cell, i) => {
                    // Apply the cell props
                    return (
                      <td
                        key={ i }
                        { ...cell.getCellProps({
                          className: cell.column.collapse ? 'collapse' : '',
                        }) }
                      >
                        {// Render the cell contents
                        cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TableWrapper>
  );
};

export default TableOverview;
