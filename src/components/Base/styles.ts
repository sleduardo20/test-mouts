import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background: var(--ternary-color);
  overflow-x: hidden;
`;

export const SlideBar = styled.div`
  width: 8.4rem;
  height: 100%;
  background: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
`;

export const GroupIcons = styled.div`
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  padding-bottom: 5.6rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--primary-color);

  :last-child {
    border-bottom: 0;
  }

  a {
    svg {
      width: 100%;
      color: var(--white-color);
    }
  }
`;

export const Wrapper = styled.main`
  flex: 1;
  margin: 6.4rem auto 0 -8.8rem;
  padding-left: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
