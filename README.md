# User List - QuasarDynamics

## Summary 👌

This project, done using the JavasCript Framework Angular, version 15 and ingesting the API https://reqres.in/, I have created a user manager app, where the user can register, login, see the list of registered users and delete them.

[![HzDEKNf.md.png](https://iili.io/HzDEKNf.md.png)](https://freeimage.host/i/HzDEKNf)


## Views 🎞️

The project has 5 diferent views:

1- Home page, shown above (/)

2- Login page (/auth/login)
[![login.png](https://i.postimg.cc/rpNdXXr0/login.png)](https://postimg.cc/2q3jhtTr)

3- Register page (/auth/register)
[![register.png](https://i.postimg.cc/kGbqCKp1/register.png)](https://postimg.cc/H8df4cHX)

4- Users page (/users)
[![users.png](https://i.postimg.cc/YqxqCfSZ/users.png)](https://postimg.cc/SJJpZ9Cf)

5- Users detail (/users/:id)
[![detail.png](https://i.postimg.cc/gjHdrmG8/detail.png)](https://postimg.cc/SYRHv02x)


## Responsive 📱

The app is responsive and can be used optimally in all the dispositive

[![usersmovile.png](https://i.postimg.cc/RC7t5Dkz/usersmovile.png)](https://postimg.cc/V5NvXDs7)

## Usage 🖐️

The app is conected to https://reqres.in/ API, so both the both the login and register information must be as follows so it wotks:

    Login:
        {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
        }

    Register:
        {
        "first_name": any,
        "last_name": any,
        "email": "eve.holt@reqres.in",
        "password": "pistol"
        }

If the user is not logged in, the users view and user detail view, will not be available, and will redirect to home automatically.

If done successfully, once registered or logged in, a Json Web Token will have been stored at the localstore, changing the header's view, as it will not show the login and register options, but the users option, and preventing the user to enter into the login/register route again.

Once logged in the user can access to the users view and user detail view.

In user detail, the delete button appears, and it calls to the API, but unfortunately, the API does not let its users be deleted, so the response has been hardcoded so it shows by console log that it has been deleted.

## Deployment 🚀

Deployed in AWS: https://master.d3f1rveqq0z3c7.amplifyapp.com/

## Tools ⛏️

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4, in addition to:

-Typescript,

-HTML,

-CSS,

JavaScript

## Author ✍️

[Hector Gonzalez Viejo](https://github.com/hectorgv00)

