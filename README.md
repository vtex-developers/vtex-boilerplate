<h2 align="center">Getting Started</h2>

### Requirements 

To get started first you should either clone or download the repository.

You should also have node.js and yarn installed on your computer.

To download the [node.js](https://nodejs.org/en/) just click on the link, usually yarn is installed along with node.js.


### Installing

The first step you must follow to run the project is to install all its dependencies.

The following commands should do this for you.

```
yarn install
```

### Starting with Webpack
```
yarn run dev (development environment)
yarn run build (production environment)  
```

## Introduction 

This webpack was basically made to supply the need of multiple entries like sass and pug, and generate in separate files.

**Tasks**

* JavaScript Module Pattern
* [Pug](https://pugjs.org/api/getting-started.html)
* [Sass](https://sass-lang.com)
 

## Exemple 

As we can see the structure of our `src` we have many file entries both JavaScript, Sass and Pug

```sh
├── src
│   ├──assets
│   │       ├──js
│   │       │  └──common
│   │       │         ├──modules
│   │       │         └──test.js
│   │       │
│   │       └──scss
│   │            └──common
│   │                   ├──config
│   │                   ├──layout   
│   │                   └──index.scss   
│   └──views
│         └──common
│               ├──layouts
│               │      └──index-base.pug
│               ├──partials
│               │      └──test.pug
│               └──template
│                      └──index.pug
```

**Dist**

```text
dist/
  ├──assets 
  │      ├──js
  │      │  └──test.js
  │      └──css    
  │          └──test.css
  └──views
        └──html-templates
                └──index.html
```

<h2 align="center"> Developed with </h2>

* [Pug](https://pugjs.org/api/getting-started.html) -Haml-based high-performance template engine.

* [Sass](https://sass-lang.com/) - CSS exoressuvi, dynamic and robust.

* [Webpack](https://webpack.js.org/) - Robust bundle files.

* [Babel](https://babeljs.io/) - The Javascript compiler.
 
* [ESlint](https://eslint.org/) - Linter for Javascript code.


 
<h2 align="center"> Credits </h2>

Special thanks to [Lucas Ruy](https://github.com/LucasRuy), one of the best developers I've ever worked with.
