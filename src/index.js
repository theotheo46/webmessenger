import login from './pages/login/login.hbs';
import error from './pages/error/error.hbs';
import './components/button';
import './components/input';
import * as styles from './styles.module.pcss';

const ROUTES = {
  "login" : login,
  "404" : error,
  "500" : error,
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
        button: {label: 'Авторизоваться'},
        styles 
      }
      break;
    case '404':
      context = { errorCode: '404', errorText: 'Не туда попали', styles }
      break;
    case '500':
      context = { errorCode: '500', errorText: 'Мы уже фиксим', styles }
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
    button: {label: 'Авторизоваться'},
    styles 
  }
  render(ROUTES.login(context));
});
