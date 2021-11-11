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
  const [isRemember, setIsRemember] = useState(false);
  const [rowsOrPage, setRowsOrPage] = useState([]);
  const [selectedRowClick, setSelectedRowClick] = useState([]);
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

  // eslint-disable-next-line react/display-name
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;
      // console.log({ rest, defaultRef, resolvedRef, ref });

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        // <>
        //   <input type='checkbox' ref={ resolvedRef } { ...rest } />
        // </>
        <CheckBox
          isRemember = { rest.checked }
        >
          <input
            type='checkbox'
            id={ `test${rest.idCheck}` }
            ref={ resolvedRef } { ...rest }
            // defaultChecked={props.defaultChecked}
            // onChange={ handleCheck }
          />
          <label htmlFor={ `test${rest.idCheck}` }/>
        </CheckBox>
      );
    }
  );

  // IndeterminateCheckbox.displayName = 'IndeterminateCheckbox';



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
  } = !props.isSelectable
  ? useTable(
    {
      columns,
      data
    },
    useSortBy,
  )
  : useTable(
    {
      columns,
      data,
      initialState: { pageIndex: pageIndexParent },
      manualPagination: true,
      pageCount: total,
      autoResetSelectedRows: false,
      getRowId: useCallback(row => row.key, []),
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          // eslint-disable-next-line react/display-name
          Cell: ({ row }) => {
            // console.log('conditional data', { props, row, text: row.original.submission_status.props.children[0].props.text, role: props.role, isTrue: props.role === 2 && row.original.submission_status.props.children[0].props.text === 'Requested' });
            if (
              (props.role === 2 && row.original.submission_status.props.children[0].props.text === 'Requested')
              ||
              (props.role === 3 && row.original.shipment_status.props.children[0].props.text === 'In-Transit')
            ) {
              return (
                  <div>
                    <IndeterminateCheckbox
                      idCheck={ row.index }
                      { ...row.getToggleRowSelectedProps() }
                    />
                  </div>
              );
            } else {
              return (
                <div />
              );
            }
          },
        },
        ...columns,
      ]);
    }
  );

    // const [sortedHeader, setSortedHeader] = useState({

    // });


    // console.log({
    //   selectedFlatRows: selectedFlatRows.map(
    //     d => d.original
    //   ),
    //   selectedRowIds
    // });

  // useEffect(() => {
  //   const parsingRows = selectedFlatRows
  //   ? selectedFlatRows.map(
  //     d => d.original
  //   )
  //   : [];
  //   props.setSelectedRows && props.setSelectedRows(parsingRows);
  // }, [selectedFlatRows]);

  useEffect(() => {
    if (props.role === 1) {
      // alert('ini rows');
      setRowsOrPage(rows);
    } else {
      // alert('ini page');
      setRowsOrPage(page);
    }
  }, [
    props.role,
    data
  ]);

  console.log('cust row page', { rowsOrPage, page });

  useEffect(() => {
    let temp = [];
    if (selectedRowIds) {
      if (Object.keys(selectedRowIds).length !== 0) {
        const entries = Object.entries(selectedRowIds);
        if (entries.length !== selectedRowClick.length) {
          let temp = selectedRowClick;
          temp = temp.filter(a => {
            return entries.map(b => { return b[0]; }).includes(a.key);
            // !entries.map(b => Number(b[0])).includes(a.key)
          });
          setSelectedRowClick(temp);
        }
        entries.forEach((el, i) => {
          console.log('entries rowsId', { el });
          if (el[1]) {
            page.forEach((el2, j) => {
              console.log('entries rowsId', { el2 });

              if ((el[0] === el2.id) && el2.isSelected) {
                const found = selectedRowClick.some(el => {
                  console.log('entries rowsId some', { el: el.key, el2: el2.id });
                  return el.key === el2.id;
                });
                console.log('entries rowsId', { el: el, el2: el2, original: el2.original, i, j, found });
                // add(selectedRowClick,  el2.id, el2);
                if (!found) {
                  let temp = [
                    ...selectedRowClick,
                    el2.original
                  ];
                  // if (temp.length > 1) {
                    temp = temp.filter(a => {
                      console.log({ a });
                      return entries.map(b => { return b[0]; }).includes(a.key);
                      // !entries.map(b => Number(b[0])).includes(a.key)
                    });
                    // console.log('entries rowsId', { tes });

                  // }
                  // setSelectedRowClick([
                  //   ...selectedRowClick,
                  //   el2.original
                  // ]);
                  console.log('ONBOARDING MULTIPLE TEMP', { temp });
                  setSelectedRowClick(temp);
                }
                // temp.push(el2.original);
              }
            });

            // let temp = selectedRowClick.filter(n => !el[0].includes(n.key));
            // console.log('entries rowsId', { temp });
          }
          // else {
          //   let temp = selectedRowClick;
          //   temp = temp.filter(a => {
          //     return entries.map(b => { return b[0]; }).includes(a.key);
          //     // !entries.map(b => Number(b[0])).includes(a.key)
          //   });
          //   setSelectedRowClick(temp);
          // }
        });
      }

      // setSelectedRowClick(temp);
      // temp = selectedRowClick.filter((thing, index, self) =>
      //   index === self.findIndex(t => (
      //     t.key === thing.key
      //   ))
      // );
      // console.log({ temp });
      // // setSelectedRowClick(temp);

      // if (selectedRowClick.length > 1) {
        // temp = [...selectedRowClick.reduce(
        //   (a, b) => a.set(b.key, Object.assign((a.get(b.key) || {}), b)),
        //   new Map
        // ).values()];
        // temp.shift();
        // setSelectedRowClick(temp);
      // }
      // props.setSelectedRows && props.setSelectedRows(selectedRowClick);
    }
  }, [selectedRowIds, page]);

  useEffect(() => {
    props.setSelectedRows && props.setSelectedRows(selectedRowClick);
  }, [selectedRowClick]);

  // console.log('ONBOARDING MULTIPLE', { selectedRowIds, selectedFlatRows, rows, page, rowsOrPage, selectedRowClick });
  console.log('ONBOARDING MULTIPLE selectedRowClick', { selectedRowClick, selectedRowIds });

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
