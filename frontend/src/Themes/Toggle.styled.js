import styled from 'styled-components';

export const ToggleContainer = styled.li`
  background: ${({ theme }) => theme.gradient};
  cursor: pointer;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
  }
`;