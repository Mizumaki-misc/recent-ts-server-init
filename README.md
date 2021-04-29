# Recent Server Configuration with TypeScript

The memo for the TypeScript Server Configuration.

## First: Repository Initialization

```sh
git init
touch .gitignore # add `node_modules` and `dist`
yarn init -y # Of course, `npm init` works as well
```

## Second: Add Basic Libraries

Add basic libraries and edit some configs.

```sh
yarn add --dev typescript @babel/cli @babel/core @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver
npx tsc --init # Create `tsconfig.json` file
touch babel.config.js
```

I recently use `babel` as the compiler of TypeScript, because I want to use `path.alias`.

## Third: Add Formatter

```sh
yarn add --dev prettier
touch .prettierrc.js .prettierignore
```

Configure prettier as you want, and add script to run prettier.
Then,

```
yarn format
```

## Fourth: Add Linter

```sh
yarn add --dev eslint eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
touch .eslintrc.json
```

Configure ESLint as you want, and add script to run ESLint.
Then,

```
yarn format
```

## Fifth: Add Test

```sh
yarn add --dev jest babel-jest @types/jest
```

These are all you need to run `jest` on TypeScript project.
However, sometimes, I prefer writing the test code in the same file as the implementation file.

```sh
touch jest.config.js
```

Using [`testRegex`](https://jestjs.io/ja/docs/configuration#testregex-string--arraystring) achives it.
It can be configured in `jest.config.js`.

Also, I write test code using `if (process.env['NODE_ENV'] === 'test') {`, so dead code elimination is needed.

```sh
yarn add --dev babel-plugin-transform-define babel-plugin-minify-dead-code-elimination
```

Using these plugins, the test codes section in the implementation file is removed in the production build.

## Sixth: Setup Server

I recently use [`fastify`](https://www.fastify.io/) rather than [`express`](https://expressjs.com/).

```sh
yarn add fastify
```
