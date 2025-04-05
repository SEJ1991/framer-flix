// src/styles/global.tsx
/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        /* Box sizing reset */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Remove default margin */
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        figure,
        blockquote,
        dl,
        dd {
          margin: 0;
        }

        /* Remove list styles on ul, ol elements */
        ul,
        ol {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        /* Set core body defaults */
        body {
          width: 100dvw;
          min-height: 100dvh;
          line-height: 1.5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
            Arial, sans-serif;
          background-color: #010101;
          color: #fff;
        }

        /* Improve media defaults */
        img,
        picture,
        video,
        canvas,
        svg {
          display: block;
          max-width: 100%;
        }

        /* Inherit fonts for inputs and buttons */
        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
      `}
    />
  );
}
