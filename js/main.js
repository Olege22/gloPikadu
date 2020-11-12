// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');
const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');
const editUsername = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');
const userAvatarElem = document.querySelector('.user-avatar')

const postsWrapper = document.querySelector('.posts');

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
    if (!regExpValidEmail.test(email)) return alert('Email не прошел проверку!')
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.autorizedUser(user)
      handler();
    }else {
      alert('Пользователь не найден!')
    }
    console.log('вход');
  },
  
  logout(handler) {
    this.user = null;
    handler();
  },
  
  signUp(email, password, handler){
    if (!regExpValidEmail.test(email)) return alert('Email не прошел проверку!')
    if (!email.trim() || !password.trim()) {
      alert('Введите данные!');
      return;
    }
    if (!this.getUser(email)){
      const user = {email, password, displayName: displayNameMaker(email)};
      listUsers.push(user);
      this.autorizedUser(user);
      handler();
    }else {
      alert('Такой пользователь уже есть!');
    }
  },
  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }

    handler();
  },
  getUser(email) {
    return listUsers.find(item => item.email === email)
  },
  autorizedUser(user) {
    this.user=user;
  }
};

const displayNameMaker = (email) => {
  const dnPre = /\w*\@/.exec(email)[0];
  return dnPre.substr(0,dnPre.length-1)
};

const setPosts = {
  allPost: [{
      title: 'Заголовлок поста',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
      author: 'olege@mail.ru',
      date: '11.11.2020, 20:54:00',
      like: 15,
      comments: 20
    },
    {
      title: 'Заголовлок поста2',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое', 'мое', 'случайность'],
      author: 'olege22@mail.ru',
      date: '10.11.2020, 20:54:00',
      like: 45,
      comments: 12
    }
  ]
}

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
  }else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
};

const showAllPosts = () => {

  let postHTML = '';
  let strTags = '';

  function tagsElem(tags) {tags.forEach((elem)=> {
      return strTags +='<a href="#" class="tag">#'+elem+'</a>'
    });
  }

  setPosts.allPost.forEach( ({ title, text, tags, author, date, like, comments }) => {
    postHTML += `
      <section class="post">
      <div class="post-body">
        <h2 class="post-title">${title}</h2>
        <p class="post-text">${text}</p>
        <div class="tags">
          ${tagsElem(tags)||''}
          ${strTags}
        </div>
      </div>
      <div class="post-footer">
        <div class="post-buttons">
          <button class="post-button likes">
            <svg width="19" height="20" class="icon icon-like">
              <use xlink:href="img/icons.svg#like"></use>
            </svg>
            <span class="likes-counter">${like}</span>
          </button>
          <button class="post-button comments">
            <svg width="21" height="21" class="icon icon-comment">
              <use xlink:href="img/icons.svg#comment"></use>
            </svg>
            <span class="comments-counter">${comments}</span>
          </button>
          <button class="post-button save">
            <svg width="19" height="19" class="icon icon-save">
              <use xlink:href="img/icons.svg#save"></use>
            </svg>
          </button>
          <button class="post-button share">
            <svg width="17" height="19" class="icon icon-share">
              <use xlink:href="img/icons.svg#share"></use>
            </svg>
          </button>
        </div>
        <div class="post-author">
          <div class="author-about">
            <a href="#" class="author-username">${setUsers.getUser(author).displayName}</a>
            <span class="post-time">${date}</span>
          </div>
          <a href="#" class="author-link"><img src="img/avatar.jpeg" alt="avatar" class="author-avatar"></a>
        </div>
      </div>
    </section>
    `
  });
  postsWrapper.innerHTML = postHTML;/*'ТУТ МОГЛА БЫТЬ ВАША РЕКЛАМА';*/
}

const init = () => {

  menuToggle.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню 
    menu.classList.toggle('visible');
  })

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    setUsers.login(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
  });
  
  loginSignup.addEventListener('click', event => {
    event.preventDefault();
  
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
  
    setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });
  
  exitElem.addEventListener('click', event => {
    event.preventDefault();
    setUsers.logout(toggleAuthDom);
  
  })
  
  editElem.addEventListener('click', event => {
    event.preventDefault();
    editContainer.classList.toggle('visible');
    editUsername.value = setUsers.user.displayName;
  });
  
  editContainer.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom)
    editContainer.classList.remove('visible');
  })
  
  showAllPosts();
  toggleAuthDom();
}

document.addEventListener('DOMContentLoaded', init)
