import styled from 'styled-components';

export const Content = styled.div`
  width: 99rem;
  height: 57rem;
  padding: 4.4rem;
  border-radius: 1.2rem;
  background: var(--white-color);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 32rem;
  height: 48rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    font-size: 2.4rem;
    color: var(--primary-color);
    line-height: 1.6rem;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;
  }

  strong {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.2rem;
    color: var(--primary-color);
    margin-bottom: 1.6rem;

    & :last-child {
      margin-bottom: 0;
    }

    span {
      color: var(--secondary-color);
      margin-left: 0.8rem;
    }
  }
`;

export const Flag = styled.div`
  width: 30.8rem;
  height: 17.3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Map = styled.div`
  flex: 1;
  width: 48.7rem;
  height: 48rem;
  border-radius: 1.2rem;
  background: transparent;
`;
