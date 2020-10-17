# Geowox - frontend assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup project

```
git clone https://github.com/antonlashan/geowox-fe.git
yarn
```

## Change environment variables

Under `src/environments` folder we have 3 environments files (`dev, staging, prod`), you could change upon correct file

> Note: env.ts file will be created when accessing node scripts, so please restart server when env file has been changed.
> Create `env.ts` file if not exist, based from other env files (just copy paste file)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `(yarn build:dev or yarn build:staging or yarn build:prod)`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
