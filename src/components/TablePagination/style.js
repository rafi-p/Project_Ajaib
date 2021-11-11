import { Colors, Sizes } from 'constant';
import styled from 'styled-components';


const PaginationTable = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media ${Sizes.sm} {
        margin-top: 15px;
        margin-bottom: 15px;
    }
`;

const PageOpt = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 20px;

        &:last-child {
            margin-right: 0px;
        }
    }
`;

const NumberPage = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;

    @media ${Sizes.sm} {
        img {
            height: 12px;
            width: auto;
        }
    }

    .blocked {
        opacity: .2;
        cursor: not-allowed !important;
    }

    .clicked {
        cursor: pointer;
        &:hover {
            opacity: .8;
        }
    }

    p {
        padding: 0px 10px;
    }

    & > * {
        margin-right: 10px;

        &:last-child {
            margin-right: 0px;
        }
    }
`;


export {
    PaginationTable,
    PageOpt,
    NumberPage
};
