import styled from 'styled-components';
import { InputProps } from '.';

export const Container = styled.div<Pick<InputProps, 'name' | 'icon'>>`
  width: 100%;
  height: 4.6rem;
  padding: 0.8rem;
  background: var(--white-color);
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--secondary-color);
    margin-right: 0.8rem;
  }

  > input {
    flex: 1;
    height: 90%;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--secondary-color);
    background: transparent;
    border: none;
    outline: none;

    ::placeholder {
      color: var(--ternary-color);
    }
  }
`;
