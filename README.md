# MERN template example

MERN stands for MongoDB, Express.js, React.js, Node.js. This is the stack that this template uses.

# backend

On the backend we use an [Express](https://www.npmjs.com/package/express) server with [MongoDB](https://mongodb.com/) as a database. We use the [mongoose package](https://www.npmjs.com/package/mongoose) to create models for out database.
In the controllers files, i use the [express-async-handler](https://www.npmjs.com/package/express-async-handler) package. This package makes it so that if we wrap our controller functions inside the `asyncHandler()` function, we can simply use the `throw new Error()` to automatically send an error.

### npm

```bash
$ cd backend
$ npm install
```

### yarn

```bash
$ cd backend
$ yarn install
```

## Getting started

This template has some example files, where `MODEL_NAME` is a substitute for the name of the model you want to create. I recommend using the search tool in VSCode to replace all values where this value is located.

# frontend

On the frontend we use React.js. In `package.json`, set the "proxy" value to the fallback uri. Read more [here](https://create-react-app.dev/docs/proxying-api-requests-in-development/). Read more about the React bootstrap in `frontend/README.md`.

## npm

```bash
$ cd frontend
$ npm install
```

## yarn

```bash
$ cd frontend
$ yarn install
```
