import styled from 'styled-components';

import * as ButtonStyles from '../../components/Button/styles';
import * as InputStyles from '../../components/Input/styles';

export const Content = styled.aside`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5.2rem;
    color: var(--primary-color);
    margin-bottom: 8.8rem;
  }

  form {
    width: 59.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5.2rem;

    ${ButtonStyles.Container} {
      width: 17.2rem;
    }

    ${InputStyles.Container} {
      width: 41.2rem;
    }
  }
`;

export const GridCards = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  gap: 5.2rem;
`;
