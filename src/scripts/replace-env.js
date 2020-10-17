/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const path = require('path');
/* eslint-enable */

const env = process.env.APP_ENV;
if (!env) {
  throw 'Env not set';
}
const from = path.join(__dirname, '..', 'environments', `env.${env}.ts`);
const to = path.join(__dirname, '..', 'environments', 'env.ts');

// copy file
try {
  fs.copySync(from, to);
} catch (err) {
  console.error(err);
}
