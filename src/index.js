import DefaultPage from './components/DefaultPage';

document.addEventListener('DOMContentLoaded', () => {
  new DefaultPage({
    target: document.getElementById('root'),
    hydrate: true
  });
});