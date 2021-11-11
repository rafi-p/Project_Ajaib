import { Colors, Sizes } from 'constant';
import styled from 'styled-components';

const Navbar = styled.div`
    background: ${Colors.white.pureWhite};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 27px 15px 47px;

    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.02);
    position: sticky;
    top: 0;
    /* z-index: 5; */
    z-index: 2;

    @media ${Sizes.sm} {
        padding: 15px 17px 15px 90px;
    }

    .logoNavbar {
        height: 32px;
        width: auto;

        @media ${Sizes.sm} {
            width: 161.25px;
            height: 24px;
        }
    }
`;

const RightNavbar = styled.div`
    display: flex;

    & > * {
        margin-right: 44px;

        &:last-child {
            margin-right: 0px;
        }
    }

`;

const ProfileNavbar = styled.div`
    display: flex;
    width: 196px;
    justify-content: space-between;
    cursor: pointer;
    align-items: center;

    &:hover {
        opacity: .8;
    }

    .down-icon {
        width: 20px;
        height: 20px;
    }
`;

const DetailProfile = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 10px;

        &:last-child {
            margin-right: 0px;
        }
    }
    .imgProfile {
        background: ${Colors.grey.default};
        min-width: 40px;
        width: 40px;
        height: 40px;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        .image {
            border-radius: 50%;
        }
        .empty {
            width: 20px;
            height: 20px;
        }
    }
    .t {
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        width: 100%;
    }
    .s {
        display: inline-block;
        width: 100%;
    }
    .t:hover, .s:hover {
        width: auto;
    }
    .s:hover .t {
        animation: ${props => props.isLong ? 'scroll 3s' : 'unset'};
    }
    .f {
        width: 120px;
        /* background: red; */
        overflow: hidden;
    }
    @keyframes scroll {
        0% {left: 0px;}
        100% {left: -100%;}
    }
`;

const PopOutProfile = styled.div`
    position: absolute;
    background: ${Colors.white.pureWhite};
    top: 78px;
    right: 20px;
    width: 200px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.02);

    p {
        padding: 10px 20px;
    }
`;

export {
    Navbar,
    RightNavbar,
    ProfileNavbar,
    DetailProfile,
    PopOutProfile
};
