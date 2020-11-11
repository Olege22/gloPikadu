// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const listUsers = [
  {
    id: '01',
    email: 'olege@mail.ru',
    password: '12345',
    displayName: 'Olege'
  },
  {
    id: '02',
    email: 'olege22@mail.ru',
    password: '123456',
    displayName: 'Olege22'
  }
];

const setUsers = {
  user: null,
  
  login(email, password, handler){
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.autorizedUser(user)
      handler();
    }else {
      alert('Пользователь не найден!')
    }
    console.log('вход');
  },
  
  logout() {
    console.log('выход');
  },
  
  signUp(email, password, handler){
    if (!this.getUser(email)){
      const user = {email, password, displayName: displayNameMaker(email)};
      listUsers.push(user);
      this.autorizedUser(user);
      handler();
    }else {
      alert('Такой пользователь уже есть!');
    }
  },
  
  getUser(email) {
    return listUsers.find(item => item.email === email)
    // let user = null;
    // for (let i = 0; i> listUsers.length; i++) {
    //   listUsers[i].email === email
    // }
  },
  
  autorizedUser(user) {
    this.user=user;
  }
};

const displayNameMaker = (email) => {
  const dnPre = /\w*\@/.exec(email)[0];
  return dnPre.substr(0,dnPre.length-1)
}

const toggleAuthDom = () => {
  const user = setUsers.user;

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName
  }else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  setUsers.login(emailInput.value, passwordInput.value, toggleAuthDom);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
});

toggleAuthDom();