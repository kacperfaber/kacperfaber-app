# kacperfaber.pl

Source code for kacperfaber.pl.
<br>
Written with ❤ in TypeScript and React

## Installation 

```shell
git clone https://www.github.com/kacperfaber/kacperfaber-app && cd kacperfaber-app
```

Setup project
```shell
npm ci
```

Run locally
```shell
# Run developer profile with default configuration.
# Default configuration is defined in webpack.config.dev.js
npm run run-dev
```

## Build

### Production

First we have to run default TypeScript compilation.

```shell
npx tsc
```

Make bundle using webpack

```shell
# specify 'env' parameters to configure links.
# $ github: Url to github profile
# $ twitter: Url to twitter profile
# $ stackoverflow: Url to stackoverflow profile
# $ emailTo: Contact email address, must start with mailto.
# $ contactEmail: Contact email will be rendered under the 'Kacper Faber'
npx webpack --config webpack.config.prod.js
```

> If env parameter is not specified, link won't be rendered by React.

Folder ./www is ready to be published. 

## Author
Kacper Faber
