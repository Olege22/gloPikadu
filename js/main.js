// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV5C0ARYrKVF-MMB6sGJJnPcacTzFtH9U",
  authDomain: "glopikadu.firebaseapp.com",
  databaseURL: "https://glopikadu.firebaseio.com",
  projectId: "glopikadu",
  storageBucket: "glopikadu.appspot.com",
  messagingSenderId: "958749716603",
  appId: "1:958749716603:web:d8019b0e3e9e2039bf32de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
const userAvatarElem = document.querySelector('.user-avatar');
const postsWrapper = document.querySelector('.posts');
const buttonNewPost = document.querySelector('.button-new-post');
const addPostElem = document.querySelector('.add-post');

const listUsers = [
  {
    id: '01',
    email: 'max@mail.ru',
    password: '12345',
    displayName: 'Maxim',
    photo: 'https://scontent.fuln9-1.fna.fbcdn.net/v/t1.0-1/c25.0.240.240a/p240x240/600558_236886969748089_1735620723_n.jpg?_nc_cat=104&ccb=2&_nc_sid=dbb9e7&_nc_ohc=S3FGGUYzrfsAX_J1jDK&_nc_ht=scontent.fuln9-1.fna&tp=27&oh=d52eae7a206dc7848ba4aa2b250a08de&oe=5FD42772'
  },
  {
    id: '02',
    email: 'olege22@mail.ru',
    password: '123456',
    displayName: 'Olege22', 
    photo: 'https://avatars.mds.yandex.net/get-zen_doc/28532/pub_5d1eb72a8e297300ad9a2fce_5d1ebcf1af329300adf417c6/scale_2400'
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
      author: {displayName: 'Max', photo: 'https://scontent.fuln9-1.fna.fbcdn.net/v/t1.0-1/c25.0.240.240a/p240x240/600558_236886969748089_1735620723_n.jpg?_nc_cat=104&ccb=2&_nc_sid=dbb9e7&_nc_ohc=S3FGGUYzrfsAX_J1jDK&_nc_ht=scontent.fuln9-1.fna&tp=27&oh=d52eae7a206dc7848ba4aa2b250a08de&oe=5FD42772'},//'olege@mail.ru',
      date: '11.11.2020, 20:54:00',
      like: 15,
      comments: 20
    },
    {
      title: 'Заголовлок поста2',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags: ['свежее', 'новое', 'мое', 'случайность'],
      author: {displayName: 'Kate', photo: 'https://ic.pics.livejournal.com/epilas/84327394/85330/85330_900.jpg'},
      //author: 'Kate@mail.ru',
      date: '10.11.2020, 20:54:00',
      like: 45,
      comments: 12
    },
    {
      title: 'Заголовлок поста3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium, officia, fugit labore eius provident saepe nobis dolor, ab non repudiandae nostrum quasi dicta vero? Ab repellendus maxime praesentium amet, vero, aspernatur recusandae tempora at atque porro voluptas quam numquam asperiores nisi sit, quia deserunt dignissimos vitae. Ullam, praesentium fugit dolore eveniet ea, fuga dolorum illo dolores sunt suscipit iste?',
      tags: ['свежее', 'новое', 'мое', 'случайность'],
      author: {displayName: 'Max', photo: 'https://avatars.mds.yandex.net/get-zen_doc/28532/pub_5d1eb72a8e297300ad9a2fce_5d1ebcf1af329300adf417c6/scale_2400'},//'olege22@mail.ru',
      //author: 'olege22@mail.ru',
      date: '15.11.2020, 12:54:00',
      like: 450,
      comments: 120
    }
  ],
  addPost(title, text, tags, handler) {
    
    this.allPost.unshift({
      title,
      text,
      tags: tags.split(',').map(item => item.trim()),
      author: {
        displayName: setUsers.user.displayName,
        photo: setUsers.user.photo
      },
      date: new Date().toLocaleString(),
      like: 0,
      comments: 0
    })
    
    if (handler) {
      handler();
    }
  }
}

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
    buttonNewPost.classList.add('visible');
  }else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
    buttonNewPost.classList.remove('visible');
    addPostElem.classList.remove('visible');
    postsWrapper.classList.add('visible');
  }
};

const showAddPost = () =>{
  addPostElem.classList.add('visible');
  postsWrapper.classList.remove('visible');
}

const showAllPosts = () => {

  addPostElem.classList.remove('visible');
  postsWrapper.classList.add('visible');

  let postHTML = '';

  setPosts.allPost.forEach( ({ title, text, tags, author, date, like, comments }) => {
    postHTML += `
      <section class="post">
      <div class="post-body">
        <h2 class="post-title">${title}</h2>
        <p class="post-text">${text}</p>
        <div class="tags">
          ${tags.map(tag => `<a href="#" class="tag">#${tag}</a>`)}
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
            <a href="#" class="author-username">${author.displayName}</a>
            <span class="post-time">${date}</span>
          </div>
          <a href="#" class="author-link"><img src=${author.photo || "img/avatar.jpeg"} alt="avatar" class="author-avatar"></a>
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
  });

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

  });

  editElem.addEventListener('click', event => {
    event.preventDefault();
    editContainer.classList.toggle('visible');
    editUsername.value = setUsers.user.displayName;
  });

  editContainer.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom)
    editContainer.classList.remove('visible');
  });

  buttonNewPost.addEventListener('click', event => {
    event.preventDefault();
    showAddPost();
  });

  addPostElem.addEventListener('submit', event => {
    event.preventDefault();
    const { title, text, tags } = addPostElem.elements;

    if(title.value.length < 6) {
      alert('Слишком короткий заголовок');
      return;
    }
    
    if(text.value.length < 6) {
      alert('Слишком короткий пост');
      return;
    }
    setPosts.addPost(title.value, text.value, tags.value, showAllPosts);

    addPostElem.classList.remove('visible');
    addPostElem.reset();
    
  })

  showAllPosts();
  toggleAuthDom();
}

document.addEventListener('DOMContentLoaded', init)
