# Ecoleta

App created during the Next Level Week #1 by [Rockseat](https://rocketseat.com.br/) (thanks Rocketseat! :) )

**Ecoleta is an app that connects people with waste collection companies.**

The parts of the app are:
- An app where people can find waste collection points in their city *(Built with React Native)*
- A website for registering collection points *(Built with React,js)*
- The server *(Built with Node.js)*

## Screenshots
<p align="center">
  <img width="250px" height="514px" alt="Ecoleta Home Screenshot" src="https://raw.githubusercontent.com/rgerio/nlw-01/master/screenshots/screenshot_expo_01.jpg"> &nbsp;&nbsp;&nbsp; <img width="250px" height="514px" alt="Ecoleta Search Screenshot" src="https://raw.githubusercontent.com/rgerio/nlw-01/master/screenshots/screenshot_expo_02.jpg"> &nbsp;&nbsp;&nbsp; <img width="250px" height="514px" alt="Ecoleta Details Screenshot" src="https://raw.githubusercontent.com/rgerio/nlw-01/master/screenshots/screenshot_expo_03.jpg">
</p>
<p align="center">
  <img width="750px" height="423px" alt="Ecoleta Web Screenshot" src="https://raw.githubusercontent.com/rgerio/nlw-01/master/screenshots/screenshot_web_01.png">
</p>

## Tecnologies
-  [Node.js](https://nodejs.org/)
-  [React.js](https://reactjs.org/)
-  [React Native](https://reactnative.dev/)
-  [Expo](https://expo.io/)
-  [TypeScript](https://www.typescriptlang.org/)

## How to Use
After installing [Git](https://git-scm.com) and [Node.js](https://nodejs.org/) (and [Expo](https://expo.io/) in your mobile phone), run from your command line:

```bash
# Clone this repository
$ git clone https://github.com/rgerio/nlw-01.git

# For server app
$ cd server
$ npm install
$ npm run knex:migrate
$ npm run knex:seed
$ npm run dev

# For website
$ cd web
$ npm install
$ npm start

# For mobile app
$ cd mobile
$ npm install
$ expo start

# For mobile app, scan the QR code in Expo app

# enjoy
```
