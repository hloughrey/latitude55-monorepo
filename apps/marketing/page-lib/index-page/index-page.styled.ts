import styled from 'styled-components';

export const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const StyledLink = styled.li`
  && > a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
