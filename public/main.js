'use strict';

const Block = window.Block;
const UserService = window.UserService;
const Form = window.Form;
const userService = new UserService();

const application = new Block(document.querySelector('#application'));
const signupForm = new Form([
    {
        classes: [],
        attrs: {
            type: 'text',
            placeholder: 'Введите ваше имя',
            required: 'required',
            name: 'username',
        }
    },
    {
        classes: [],
        attrs: {
            type: 'email',
            placeholder: 'Введите ваш E-Mail',
            required: 'required',
            name: 'email',
        }
    },
    {
        classes: [],
        attrs: {
            type: 'text',
            placeholder: 'Введите ваше Возраст',
            required: 'required',
            name: 'age',
        }
    },
    {
        classes: [],
        attrs: {
            type: 'submit',
            value: 'Зарегистрироваться',
        }
    },
]);

application.append(signupForm);
signupForm.on('submit', function() {
    console.log('Submit signup');
});

//
// userService.auth('username', '1@2.ru', function (err, response) {
//     console.log(err, response);
// });
//
// const sections = [
//     ['login', 'Окно логина'],
//     ['profile', 'Мой профиль'],
//     ['about', 'Об игре'],
// ];
//
//
// const nav = new Block(document.getElementById('navigation'));
//
// const loginForm = new Block(document.getElementById('login-form'));
//
// const usernameDiv = new Block(document.getElementById('username-div'));
// const emailDiv = new Block(document.getElementById('email-div'));
// const countDiv = new Block(document.getElementById('count-div'));
//
// application
//     .append(nav)
//     .append(loginForm)
//     .append(usernameDiv)
//     .append(emailDiv)
//     .append(countDiv);
//
// for (let section of sections) {
//     const b = Block.Create('input', [], {type: 'button', 'data-section': section[0]});
//     nav.append(b);
// }
//
// const liveSectionsCollection = application.getElementsByTagName('section');
//
// nav.addEventListener('click', function (event) {
//     const sectionId = event.target.getAttribute('data-section');
//     const liveSectionsArray = Array.from(liveSectionsCollection);
//
//     if (sectionId === 'profile') {
//         liveSectionsArray.forEach(function (sectionElement) {
//             sectionElement.hidden = true;
//         });
//         whoami(function (err, resp) {
//             if (err) {
//                 return alert(`AUTH Error: ${err.status}`);
//             }
//             emailDiv.textContent = resp.email;
//             usernameDiv.textContent = resp.username;
//             countDiv.textContent = resp.count;
//             liveSectionsArray
//                 .find(section => section.id === 'profile')
//                 .hidden = false;
//         });
//         return;
//     }
//
//     liveSectionsArray.forEach(function (sectionElement) {
//         sectionElement.hidden = sectionElement.id !== sectionId;
//     });
// });
//
// loginForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     console.log(loginForm.elements);
//     const email = loginForm.elements['email'].value;
//     const username = loginForm.elements['username'].value;
//
//     auth(username, email, function (err, resp) {
//         if (err) {
//             return alert(`AUTH Error: ${err.status}`);
//         }
//
//         loginForm.reset();
//     });
// });
