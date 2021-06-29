(function() {
    'use strict';

    const Http = window.Http;

    class UserService {
        constructor() {

        }

        auth(username, email, callback) {
            const user = {username, email};
            Http.Post('/auth', user, callback);
        }

        whoami(callback) {
            Http.Get('/login', callback);
        }

        loadScores(callback) {
            Http.Get('/users', callback);
        }
    }

    window.UserService = UserService;

}) ();