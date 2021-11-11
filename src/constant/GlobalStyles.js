import { createGlobalStyle } from 'styled-components';

import Sizes from './Sizes';
import Fonts from './Fonts';

export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  ==START==
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: ${Fonts.manrope};
    overflow: hidden;

  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  ==END==
  */

  .p-0 {
    padding: 0 !important;
  }

  @media ${Sizes.md }{
    .md-p-0 {
      padding: 0 !important;
    }
  }

  .ReactModal__Overlay {
    background-color: rgba(0, 0, 0, .8) !important;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 40px;
    height: fit-content;
    height: 100%;
    min-height: -webkit-fill-available;
    position: fixed !important;
    z-index: 102;
  }


  .ReactModal__Content {
    position: unset !important;
    inset: unset !important;
    border: none !important;
    background: unset !important;
    overflow: auto !important;
    border-radius: unset !important;
    outline: none !important;
    padding: unset !important;
    height: fit-content;


    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
  }

  .Toastify__toast-container--top-right {
    margin-top: 80px !important;

    @media ${Sizes.sm} {
      /* width: calc(100vw - 30px) !important; */
      right: 15px !important;
      margin-top: 70px !important;
      left: 15px !important;
    }
  }

  .Toastify__toast-container--top-center {
    transform: translateX(-50%) !important;
    margin-top: 10px !important;
  }

  .Toastify__toast-container {
    width: unset !important;
    padding: unset;
    /* left: unset !important;
    right: 29px !important; */
    transform: unset;
    /* margin-top: 80px !important; */
    top: unset !important;

    @media ${Sizes.sm} {
      width: calc(100vw - 30px) !important;
      /* right: 15px !important;
      margin-top: 70px !important; */

    }

    .Toastify__toast {
      min-height: unset;
      border-radius: 10px;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.02) !important;

    }

    .Toastify__toast--default {
      background: unset;
      color: unset;
      padding: 0;
      @media ${Sizes.sm} {
        width: 100%;
      }
      button {
        display: none;
      }
      .Toastify__toast-body {
        padding: unset;
        margin: unset;
        @media ${Sizes.sm} {
          width: 100%;
        }
      }
    }
  }
`;
