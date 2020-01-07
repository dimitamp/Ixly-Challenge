import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import loadPlugins from './plugins';
import AppContainer from './components/app-container';
import ErrorBoundary from './components/error-boundary';
import AppRoutes from './components/app-routes';
import theme from './lib/theme';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/select/lib/css/blueprint-select.css';

const App = ({store, persistor}) => (
  <PersistGate loading={null} persistor={persistor}>
    <Router>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ErrorBoundary>
            <AppContainer>
              <AppRoutes />
            </AppContainer>
          </ErrorBoundary>
        </Provider>
      </ThemeProvider>
    </Router>
  </PersistGate>
);

export default loadPlugins(App);
