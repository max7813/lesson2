'use strict';

const Block = window.Block;
const UserService = window.UserService;
const userService = new UserService();

userService.auth('username', '1@2.ru', function (err, response) {
    console.log(err, response);
});

const sections = [
    ['login', 'Окно логина'],
    ['profile', 'Мой профиль'],
    ['about', 'Об игре'],
];


const application = new Block(document.querySelector('#application'));
const nav = new Block(document.getElementById('navigation'));

const loginForm = new Block(document.getElementById('login-form'));

const usernameDiv = new Block(document.getElementById('username-div'));
const emailDiv = new Block(document.getElementById('email-div'));
const countDiv = new Block(document.getElementById('count-div'));

for (let section of sections) {
    const button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('data-section', section[0]);
    button.value = section[1];
    nav.appendChild(button);
}

const liveSectionsCollection = application.getElementsByTagName('section');

nav.addEventListener('click', function (event) {
    const sectionId = event.target.getAttribute('data-section');
    const liveSectionsArray = Array.from(liveSectionsCollection);

    if (sectionId === 'profile') {
        liveSectionsArray.forEach(function (sectionElement) {
            sectionElement.hidden = true;
        });
        whoami(function (err, resp) {
            if (err) {
                return alert(`AUTH Error: ${err.status}`);
            }
            emailDiv.textContent = resp.email;
            usernameDiv.textContent = resp.username;
            countDiv.textContent = resp.count;
            liveSectionsArray
                .find(section => section.id === 'profile')
                .hidden = false;
        });
        return;
    }

    liveSectionsArray.forEach(function (sectionElement) {
        sectionElement.hidden = sectionElement.id !== sectionId;
    });
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(loginForm.elements);
    const email = loginForm.elements['email'].value;
    const username = loginForm.elements['username'].value;

    auth(username, email, function (err, resp) {
        if (err) {
            return alert(`AUTH Error: ${err.status}`);
        }

        loginForm.reset();
    });
});
