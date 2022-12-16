# Install

**tl;dr**: [Download WSK](https://github.com/google/web-starter-kit/releases/latest) and run `$ npm install` in that directory to get started.

---

To take advantage of HTML Starter Kit you need to:

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Modify the application to your liking.
4. Deploy your production code.

## Getting the code

[Download]() and extract DPWK to where you want to work.

## Prerequisites

### [Node.js](https://nodejs.org)

Bring up a terminal and type `node --version`.
Node should respond with a version at or above 0.10.x.
If you import Node, go to [How to install node with nvm](https://naser.xyz/blog/2015/nvm/) and install `nvm` for installing node.

### Local dependencies

Next, install the local dependencies HTML Starter Kit imports:

```sh
$ npm install
```

## gulp-sass version 5 update

In the new version of Gulp-sass plugin we had some breaking changes.
If you encounter the compiler error while starting the project please do as follow:

1. Breaking changes
2. Require Node >= 12
3. Require Gulp 4
4. Drop dependency on the deprecate node-sass
5. Remove hardcoded default Sass compiler

### Upgrading to v5
It is now required to explicitly install a Sass compiler.

```sh
$ npm install gulp-sass sass
```
or to continue using node-sass

```sh
$ npm install gulp-sass node-sass
```
Gulp tasks will also need to be update to use the installed Sass compiler

```sh
$ const sass = require('gulp-sass')(require('sass'));
```
src: https://openbase.com/js/gulp-sass/versions

Note: if you have the [Yarn](https://yarnpkg.com/) package manager installed, you can just run `yarn`.
Web Starter Kit includes a yarn.lock file that will be used here.

That's it! You should now have everything needed to use the Web Starter Kit.

---

You may also want to get used to some of the [commands](commands.md) available.
