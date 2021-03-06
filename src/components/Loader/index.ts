import styled, { css } from 'styled-components';

export const Loader = styled.div`
  ${css`
    border: 16px solid var(--white-color);
    border-radius: 50%;
    border-top: 16px solid var(--primary-color);
    width: 120px;
    height: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-animation: spin 1.3s linear infinite;
    animation: spin 1.3s linear infinite;

    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
