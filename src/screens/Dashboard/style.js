import { Colors, Fonts, Sizes, Images } from 'constant';
import styled from 'styled-components';

const Content = styled.div`
    .filter {
        display: flex;
        align-items: center;
        & > * {
            margin-right: 10px;

            &:last-child {
                margin-right: 0px;
            }
        }
        @media ${Sizes.sm} {
            display: flex;
            justify-content: center;
        }
    }
    & > * {
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0px;
        }
    }
    transition: opacity .3s;
    opacity: ${props => (props.loading ? '.3' : '1')};
    pointer-events: ${props => (props.loading ? 'none' : 'inherit')};
    cursor: ${props => (props.loading ? 'not-allowed' : 'inherit')};
`;

export {
    Content
};
