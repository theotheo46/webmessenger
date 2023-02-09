import login from './pages/login/login.hbs';
import './components/button';
import './components/input';
import * as styles from './styles.module.pcss';

const ROUTES = {
  "login" : login,
  "404" : login,
  "500" : login,
}

const PORT = 3000;

function render(html) {
  const app = document.querySelector('#app');
  app.innerHTML = html;
}

window.goToPage = function (name) {
  const page = ROUTES[name]
  let context;
  switch (name) {
    case 'login':
      context = { 
        title: 'Вход',
        login:    {  placeholder: 'Логин', type: 'text', error_text: 'Неверный логин' }, 
        password: {  placeholder: 'Пароль', type: 'password', error_text: '' }, 
        styles 
      }
      break;
    case '404':
      context = { title: '404', placeholder: 'Логин', type: 'text', error_text: 'Неверный логин', styles }
      break;
    case '500':
      context = { title: '500', placeholder: 'Логин', type: 'text', error_text: 'Неверный логин', styles }
      break;
    default:
      console.log('Unknown name: ' + name);
      break;
  }
  render(page(context));
}

window.addEventListener('DOMContentLoaded', () => {
  context = { 
    title: 'Вход',
    login:    {  placeholder: 'Логин', type: 'text', error_text: 'Неверный логин' }, 
    password: {  placeholder: 'Пароль', type: 'password', error_text: '' }, 
    styles 
  }
  render(ROUTES.login(context));
});
