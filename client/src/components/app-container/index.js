import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
`;

export const Component = ({children}) => (
  <AppContainer>
    {children}
  </AppContainer>
);

export default Component;
