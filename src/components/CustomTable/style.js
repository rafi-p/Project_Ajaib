import styled, { css } from 'styled-components';

import { Colors, Fonts, Sizes, FontStyles, Images } from 'constant';


const TableWrapper = styled.div`
    display: block;
    max-width: 100%;
    background: ${Colors.white.pureWhite};
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    width: 1000px;

    /* overflow-x: scroll; // untuk tabel panjang */

    @media ${Sizes.sm} {
        width: 100vw;
        overflow-y: scroll;
    }

    .tableWrap {
        display: block;
        max-width: 100%;
        /* width: calc(100% + 100%); // untuk tabel panjang */
        /* overflow-x: ${props => (props.scrollX ? 'scroll' : 'hidden')}; */
        /* overflow-x: scroll; */
        /* overflow-y: hidden; */

        scrollbar-width: thin;
        scrollbar-color: ${Colors.grey.default} ${Colors.grey.bgAll};

        ::-webkit-scrollbar {
            height: 8px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
            background: ${Colors.grey.bgAll};
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: ${Colors.grey.default};
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: ${Colors.grey.darkGrey};
        }
        &.scroll-custom {
        }

    }

    .rowTes {
        display: flex;
        align-items: center;
        white-space: nowrap;
        /* justify-content: space-between; */
        .prevent {
            cursor: auto !important;
            &:hover {
                opacity: 1;
            }
        }

        & > * {
            margin-right: 5px;

            &:last-child {
                margin-right: 0px;
            }
        }

        .img-container {
            display: flex;
            align-items: center;
            cursor: pointer;
            img {
                height: 20px;
                width: 20px;
            }

            &:hover {
                opacity: .8;
            }
        }
    }

    .paddingHead {
        padding: 10px 10px !important;
        width: ${props => (props.customWidth ? 'auto' : '30%')};
        white-space: nowrap;
    }

    .center {
        span {
            justify-content: center;
        }
        justify-content: center;
        .rowTes {
            justify-content: center;
        }
    }
    .w-5 {
        width: 5% !important;
    }
    .w-10 {
        width: 10% !important;
    }
    .w-12-5 {
        width: 12.5% !important;
    }
    .w-15 {
        width: 15% !important;
    }
    .w-20 {
        width: 20% !important;
    }
    .w-25 {
        width: 25% !important;
    }
    .w-30 {
        width: 30% !important;
    }
    .w-35 {
        width: 35% !important;
    }
    .w-40 {
        width: 40% !important;
    }
    .w-45 {
        width: 45% !important;
    }
    .w-50 {
        width: 50% !important;
    }

    th {
        .header-container {
            display: flex;
            align-items: center;
            img {
                height: 20px;
                width: 20px;
                cursor: pointer;
                &:hover {
                    opacity: .8;
                }
            }

        }
        @media ${Sizes.sm} {
            font-size: 14px;
            font-weight: 700;
            color: #949494;
        }
    }

    table {
    /* Make sure the inner table is always as wide as needed */
        width: ${props => (props.scrollX ? '200%' : '100%')};
        border-spacing: 0;

        tr {
            :first-child {
                border-top: 1px solid ${Colors.grey.lineGrey};
            }
            :last-child {
                td {
                    border-bottom: 0;
                }
            }
        }

        td {
            font-size: ${FontStyles.mediumS.size};
            font-weight:  ${FontStyles.mediumS.weight};
            line-height:  ${FontStyles.mediumS.lineHeight};
        }

        th,
        td {
            margin: 0;
            white-space: nowrap;
            /* padding: 20px 20px; */
            padding: 20px 10px;
            :first-child {
                padding-left: 20px !important;
            }
            :last-child {
                padding-right: 20px !important;
            }
            border-bottom: 1px solid ${Colors.grey.lineGrey};
            /* border-right: 1px solid ${Colors.grey.lineGrey}; */
            vertical-align: middle;
            /* The secret sauce */
            /* Each cell should grow equally */
            width: 1%;
            /* But "collapsed" cells should be as small as possible */
            &.collapse {
                width: 0.0000000001%;
            }

            &.hide {
                display: none;
            }



            :last-child {
                border-right: 0;
            }
        }
    }

    /* .pagination {
        padding: 0.5rem;
    } */

`;

const CheckBox = styled.div`
    /* Base for label styling */
    [type="checkbox"]:not(:checked),
    [type="checkbox"]:checked {
        position: absolute;
        left: 21.5px;
        opacity: 0.01;
    }
    [type="checkbox"]:not(:checked) + label,
    [type="checkbox"]:checked + label {
        position: relative;
        /* padding-left: 32px; */
        font-size: 14px;
        line-height: 19.12px;
        cursor: pointer;
        font-weight: 500;

        /* @media ${Sizes.sm} {
            padding-left: 25px;
        } */
    }

    /* checkbox aspect */
    [type="checkbox"]:not(:checked) + label:before,
    [type="checkbox"]:checked + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: -15px;
        width: 16px;
        height: 16px;
        border: unset;
        background: ${props => props.isRemember ? Colors.black.default : Colors.grey.lineGrey};
        border-radius: 6px;
        /* @media ${Sizes.sm} {
            width: 16px;
            height: 16px;
        } */
    }

    /* checked mark aspect */
    [type="checkbox"]:not(:checked) + label:after,
    [type="checkbox"]:checked + label:after {
        content: '✔';

        position: absolute;
        top: -7px;
        left: 5px;
        font-size: 8px;
        color: ${Colors.white.pureWhite};
        background: ${Colors.black.default} !important;
        line-height: 0;
        /* @media ${Sizes.sm} {
            top: 8px;
            left: 5.5px;
            font-size: 8px;
        } */
        /* -webkit-transition: all .2s;
            transition: all .2s; */
    }

    /* checked mark aspect changes */
    [type="checkbox"]:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0) rotate(45deg);
            transform: scale(0) rotate(45deg);
    }

    [type="checkbox"]:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1) rotate(0);
            transform: scale(1) rotate(0);
    }

    /* Disabled checkbox */
    [type="checkbox"]:disabled:not(:checked) + label:before,
    [type="checkbox"]:disabled:checked + label:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #e9e9e9;
    }

    [type="checkbox"]:disabled:checked + label:after {
        color: #777;
    }

    [type="checkbox"]:disabled + label {
        color: #aaa;
    }
`;

export {
  TableWrapper,
  CheckBox
};
