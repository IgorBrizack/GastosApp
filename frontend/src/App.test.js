import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import App from './App';

  // testing login screen
describe('Testando a tela de Login', () => {

  afterEach(() => jest.clearAllMocks());

  // I will try to verify the login screen elements.
  it('Verificando se os elementos estão contidos na tela.', () => {
    const history = createMemoryHistory();
    localStorage.clear()

    render(
      <Router history={ history }>
        <App />
      </Router>
    );

  });
});
