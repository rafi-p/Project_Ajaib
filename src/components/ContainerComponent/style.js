import { Colors, Fonts, Sizes, Images } from 'constant';
import styled from 'styled-components';

const Container = styled.div`
    /* background: ${Colors.grey.bgAll}; */
    height: 100vh;
    /* height: var(--app-height); */

    /* min-height: calc(100 * var(--vh)); */
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }

    .hoverAction {
        cursor: pointer;
        transition: all .3s;
        &:hover {
            opacity: .8;
        }
    }

    .mb-5 {
        margin-bottom: 5px !important;
    }
    .mb-10 {
        margin-bottom: 10px !important;
    }
    .mb-15 {
        margin-bottom: 15px !important;
    }
    .mb-20 {
        margin-bottom: 20px !important;
    }
    .mb-30 {
        margin-bottom: 30px !important;
    }
    .mb-40 {
        margin-bottom: 40px !important;
    }
    .mb-60 {
        margin-bottom: 60px !important;
    }

    .mr-5 {
        margin-right: 5px !important;
    }
    .mr-10 {
        margin-right: 10px !important;
    }
    .mr-15 {
        margin-right: 15px !important;
    }
    .mr-20 {
        margin-right: 20px !important;
    }
    .mr-30 {
        margin-right: 30px !important;
    }
    .mr-40 {
        margin-right: 40px !important;
    }
    .mr-60 {
        margin-right: 60px !important;
    }

    .mt-8 {
        margin-top: 8px !important;
    }
`;

const Content = styled.div`
    padding: 20px;
    /* display: flex; */
    display: flex;
    justify-content: center;
    /* grid-template-columns: ${props => (props.isNotFound ? 'auto' : '250px auto')}; */
    /* height: ${props => (props.isNotFound && '100%')}; */

    @media ${Sizes.sm} {
        grid-template-columns: auto;
        padding: 15px;
    }

`;

export {
    Container,
    Content,
};
