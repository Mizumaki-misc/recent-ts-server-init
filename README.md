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
