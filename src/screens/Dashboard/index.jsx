import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import {
  Text,
  CustomButton,
  ContainerComponent,
  CustomTable,
  TablePagination,
  CustomInput,
  CustomDropdown
} from 'components';
import { FontStyles, Images, Colors, Fonts, ConstData } from 'constant';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

import {
  Content
} from './style';
import { LocalStorage } from 'helpers';
import Moment from 'moment';

import * as randomUserActions from 'store/randomUser/actions';

const Dashboard = props => {
  // MAPSTATE
  const [sortedHeader, setSortedHeader] = useState(
    {}
  );
  const [dataMain, setDataMain] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchUser, setSearchUser] = useState('');
  const [selectedOptGender, setSelectedOptGender] = useState(ConstData.genderOpt[0]);
  const selectGender = data => {
    setSelectedOptGender(data);
  };
  const [loading, setLoading] = useState(false);

  // MAPDISPATCH
  const dispatch = useDispatch();
  const dataUser = useSelector(state => state.randomUser.data);
  const getRandomUsers = dispatch(randomUserActions.getRandomUsers);

  useEffect(() => {
    let payload = {
      page: 1,
      results: limit,
      gender: selectedOptGender.value
    };
    getRandomUsers(payload);
  }, []);

  const actionGetRandomUsers = () => {
    let payload = {
      page,
      results: limit,
      gender: selectedOptGender.value
    };
    setLoading(true);
    getRandomUsers(payload)
    .then(res => {

    })
    .catch(err => {

    })
    .finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
      actionGetRandomUsers();
      setSearchUser('');

  }, [page, selectedOptGender]);

  const handleSearchInput = () => {
    const newData =  dataMain ? dataMain.filter(item =>
        // item.name.includes(searchUser)
        item.name.toLowerCase().includes(searchUser && searchUser.toLowerCase())
      ) : dataMain;
    setDataSearch(newData);
  };

  useEffect(() => {
    handleSearchInput();
  }, [searchUser]);

  useEffect(() => {
    let tempData = [];
    if (Object.keys(dataUser).length !== 0) {
      tempData = dataUser.map((el, i) => {
        return dataParsing(el);
      });
    }
    setDataMain(tempData);
  }, [dataUser]);

  const rowSpanAdd = (col, row, isHide) => {
    return false;
  };

  const widthCustom = col => {
    let width = '';
    switch (col) {
      default:
        break;
    }
    return width;
  };

  const headerProps = (column, headerGroup, col, row) => {

    return {
      className:
        column.collapse
        ? 'collapse'
        : rowSpanAdd(col, row, true)
          ? 'hide'
          : headerGroup.headers.length - 1 === col && row === 0
            ? `paddingHead ${widthCustom(col)}`
            : `paddingHead ${widthCustom(col)}`,
      rowSpan: rowSpanAdd(col, row) ? 2 : '',
    };
  };

  const colorFilter = data => {
    let colorText = Colors.black.default;

    switch (data) {
      default:
        break;
    }

    return colorText;
  };

  const whichSorted = (headerGroup, headerGroups, col, row) => {
    return false;
  };

  const tdData2 = ({ name, number, isBold, isHeader, notSorted, id, isUrl, isMovingPage, isBrand  }) => {
    if (isMobile) {
      if (isUrl || isBrand) {
        <Text
          styling={
            isHeader
            ? FontStyles.boldM
            : number
              ? FontStyles.mediumM
              : FontStyles.mediumS
          }
          text={
            (name || name === 0) && !isUrl
            ? name
            : (name || name === 0) && isUrl
              ? 'Link'
              : '-' }
          weight={ isBold ? Fonts.fontWeight.bold : '' }
          color={
            isHeader
            ? Colors.grey.darkGrey
            : colorFilter(name)
          }
          onClick={ () => {
            if (isUrl && isMovingPage) {
              props.history.push({
                pathname: '/brand',
                // state: { id: brandId }
              });
            } else if (isUrl && !isMovingPage) {
              window.open(name, '_blank');
            } else {

            }
          } }
        />;
      } else {
        return name || name === 0  ? name : '-';
      }
    } else {
      return (
        <div className={ `rowTes ${isBold ? 'bold' : ''}` }>
          <Text
            styling={
              isHeader
              ? FontStyles.boldM
              : number
                ? FontStyles.mediumM
                : FontStyles.mediumS
            }
            text={
              (name || name === 0) && !isUrl
              ? name
              : (name || name === 0) && isUrl
                ? 'Link'
                : '-'
            }
            weight={ isBold ? Fonts.fontWeight.bold : '' }
            color={
              isHeader
              ? Colors.grey.darkGrey
              : colorFilter(name)
            }
            onClick={ () => {
              if (isBrand && isMovingPage) {
                props.history.push({
                  pathname: '/brand',
                });
              } else if (isUrl && !isMovingPage) {
                window.open(name, '_blank');
              } else {

              }
            } }
            className={
              `${(isUrl || isBrand) ? '' : 'prevent'}`
            }
          />
          {
            isHeader && !notSorted &&
            <div
              className='img-container'
              onClick={ () => {
                setSortedHeader(
                  {
                    [`sort${id}`]: sortedHeader[`sort${id}`]
                    ?
                    !sortedHeader[`sort${id}`]
                    : true
                  }
                );
              } }
            />
          }
        </div>
      );
    }
  };

  const dataParsing = el => {
    let payload = {
      username: el.username,
      name: el.name,
      email: el.email,
      gender: el.gender,
      registered: el.registered,
    };
    return payload;
  };

  const columns2 = React.useMemo(
    () => {
      let payload = [
        {
          Header: isMobile ? 'Username' :  tdData2({ name: 'Username', isHeader: true, id: 0 }),
          accessor: 'username',
        },
        {
          Header: isMobile ? 'Name' :  tdData2({ name: 'Name', isHeader: true, id: 1 }),
          accessor: 'name',
        },
        {
          Header: isMobile ? 'Email' :  tdData2({ name: 'Email', isHeader: true, id: 2 }),
          accessor: 'email',
        },
        {
          Header: isMobile ? 'Gender' :  tdData2({ name: 'Gender', isHeader: true, id: 3 }),
          accessor: 'gender',
        },
        {
          Header: isMobile ? 'Registered Date' :  tdData2({ name: 'Registered Date', isHeader: true, id: 4 }),
          accessor: 'registered',
        },
      ];
      return payload;
    },
    []
  );

  return (
    <ContainerComponent>
      <Content
        loading={ loading }
      >
        <div
          className='filter'
        >
          <CustomDropdown
            options={ ConstData.genderOpt }
            onSelect={ selectGender }
            defaultOption={ selectedOptGender }
            placeholder='Gender'
            closedArrow={ <img src={ Images.icons.up } /> }
            openArrow={ <img src={ Images.icons.downGreyDropdown } /> }
            // styleType='modal'
            width={ isMobile ? '100px' : '200px' }
            // border={ true }
            height='40px'
            styling={ FontStyles.mediumL }
          />
          <CustomInput
            keyword={ searchUser }
            setKeyword={ setSearchUser }
            placeholder='Search name'
            width= { isMobile ? '100%' : '300px' }
            height={ '40px' }
            type='text'
            isSearch={ true }
            // onClick={ () => { handleSearchInput(); } }
          />
        </div>
        <CustomTable
          columns={ columns2 }
          data={ (searchUser) ? dataSearch : dataMain }
          headerProps={ headerProps }
          sortedHeader={ sortedHeader }
          setSortedHeader={ setSortedHeader }
          whichSorted={ whichSorted }
        />
        <TablePagination
          limit={ limit }
          setLimit={ setLimit }
          page={ page }
          setPage={ setPage }
        />
      </Content>
    </ContainerComponent>
  );

};

export default Dashboard;
