import styled from 'styled-components';
import { ButtonProps } from '.';

export const Container = styled.button<Pick<ButtonProps, 'bg'>>`
  width: 17.2rem;
  height: 4.6rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0.8rem;
  color: var(--white-color);
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 400;

  background: ${({ bg }) =>
    bg === 'primary' ? 'var(--primary-color)' : 'var(--secondary-color)'};

  > span {
    flex: 1;
  }

  > svg {
    margin-left: 0.8rem;
    width: 2.4rem;
    height: 2.4rem;
  }
`;
