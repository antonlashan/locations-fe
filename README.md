# Geowox - frontend assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup project

1. Clone repo `git clone https://github.com/antonlashan/geowox-fe.git`
2. Install all dependencies `yarn or yarn install`

## Change environment variables

Under `src/environments` folder we have 3 environments files (`dev, staging, prod`), you could change upon correct file

> Note: env.ts file will be created when accessing node scripts, so please restart dev server when env file has been changed.

### Change locale
If you would need to change locale, currency, ... like variable, you could change this file
`src/helpers/config.ts`
```ts
export const LOCALE = 'en'; // nl
export const CURRENCY = 'USD'; // EUR
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

And navigate to the `Properties` route (http://localhost:3000/properties)

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`
You could see covergae report in root folder, (`./coverage/lcov-report/index.html`)

### `(yarn build:dev or yarn build:staging or yarn build:prod)`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Localization
`yarn i18n:extract` will be extracted all i18n constants into `src/i18n/lang/en.json` file

This file `src/i18n/lang/en.json` should be changed by users (maybe content writters), add translations

After done translations just run this `i18n:compile:en`, then translations done
> If you need additional translations for any other languages get a copy of a `src/i18n/lang/en.json` file and rename it. Ex: `src/i18n/lang/nl.json`  
And do again same process

And add/change locale file inside `src/index.tsx`
```ts
const loadLocaleData = (locale: string) => {
  switch (locale) {
    case 'nl':
      return import('./i18n/compiled-lang/nl.json');
    default:
      return import('./i18n/compiled-lang/en.json');
  }
};
```

## Used technologies
1. React with typescript
2. React [Material-UI](https://material-ui.com) library
3. [Format.JS](https://formatjs.io/docs/getting-started/installation) for internationalization
4. [React Google Maps Api](https://react-google-maps-api-docs.netlify.app) for google maps
5. [Victory](https://formidable.com/open-source/victory) for charts
6. [loadable-components](https://github.com/gregberge/loadable-components#readme) for lazy load routes
6. Pretier, linters, pre-commit hook [here](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged)


## Steps to run docker locally

- Install [docker](https://docs.docker.com/get-docker)
  `yarn docker:local`
- Run the docker `yarn docker:local:up`
- open http://localhost

---
