import styled from 'styled-components';

export const Contanier = styled.div`
  width: 25.3rem;
  height: 28.6rem;
  padding: 1.2rem 0.8rem 0.8rem 0.8rem;
  border-radius: 1.2rem;
  background: var(--white-color);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  transition: 0.1s ease-in;

  :hover {
    transform: scale(1.02);
  }

  h2,
  span {
    width: min-content;
    color: var(--secondary-color);
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.8rem;
  }

  span {
    font-size: 1.6rem;
  }

  a {
    padding: 0.4rem;
    width: min-content;

    > svg {
      width: min-content;
      color: var(--primary-color);
    }

    :hover {
      cursor: pointer;

      svg {
        color: var(--black-color);
      }
    }
  }
`;

export const Flag = styled.div`
  width: 14.9rem;
  height: 14.9rem;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
