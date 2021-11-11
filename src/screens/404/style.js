import { Colors, Fonts, Sizes, Images } from 'constant';
import styled from 'styled-components';


const Container404 = styled.div`
    background: ${Colors.white.pureWhite};
    width: 100%;
    height: ${props => (props.token ? 'calc(100vh - 110px)' : 'calc(100vh - 40px)')} ;
    border-radius: 20px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.02);
    justify-content: center;
    align-items: center;
    display: flex;

    @media ${Sizes.sm} {
        height: ${props => (props.token ? 'calc(100vh - 84px)' : 'calc(100vh - 30px)')} ;
    }

    .container-text {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 440px;
        text-align: center;

        @media ${Sizes.sm} {
            padding: 10px;
        }

        .mt-58 {
            margin-top: 58px;
            width: 220px;

            @media ${Sizes.sm} {
                margin-top: 30px;
            }
        }
    }

    .wrapper-img {
        background: ${Colors.grey.lineGrey};
        width: 120px;
        height: 120px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media ${Sizes.sm} {
            width: 100px;
            height: 100px;

            img {
                width: 40px;
                height: 40px;
            }
        }

    }
`;

export {
    Container404,
};
