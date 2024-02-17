# @rainetian/lint

[![NPM version](https://img.shields.io/npm/v/@rainetian/lint.svg?style=flat)](https://npmjs.org/package/file-explorer)

Stylelint config, ESlint config, Prettier config for fewismuch

# Installation

```shell
npm i @rainetian/lint --save-dev

pnpm i @rainetian/lint --save-dev

yarn add @rainetian/lint -D
```

# Usage

Create a new `.npmrc` file (if it doesn't exist) and add the following:
```shell
lockfile=false
resolution-mode=highest
public-hoist-pattern[]=*changelog*
public-hoist-pattern[]=*commitlint*
public-hoist-pattern[]=*eslint*
public-hoist-pattern[]=*postcss*
public-hoist-pattern[]=*prettier*
public-hoist-pattern[]=*stylelint*
```

## stylelint
in `.stylelintrc.js`
```typescript
module.exports = require("@rainetian/lint").stylelint
```

## eslint
in `.eslintrc.js`
```typescript
module.exports = require('@rainetian/lint').eslint
```

## prettier
in `.prettierrc.js`
```typescript
module.exports = require('@rainetian/lint').prettier
```

