import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { makeServer } from './Server'
import { unmountComponentAtNode } from 'react-dom';

let container: any = null
beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove()
  container = null

})

describe('renders App', () => {
  it('contains title', () => {})
})