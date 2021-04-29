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
touch babel.config.json
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
