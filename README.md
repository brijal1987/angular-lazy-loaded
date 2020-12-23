# Installation

#### [Backend - nest-js-backend](#https://github.com/brijal1987/nest-js-backend)

```bash
$ git clone https://github.com/brijal1987/nest-js-backend.git
$ cd nest-js-backend
$ npm install
```
#### Running the backend server

```bash
# development
$ npm run start
```

Server will run on`http://127.0.0.1:3000/`


#### Frontend - angular-lazy-loaded
```bash
$ git clone https://github.com/brijal1987/angular-lazy-loaded.git
$ cd angular-lazy-loaded
$ npm install
```

#### Running the app

```bash
$ ng serve
```

#### Change API_URL with `backend api URL` in `angular-lazy-loaded/src/app/constants/index.ts` 
API_URL = 'http://127.0.0.1:3000/'

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
