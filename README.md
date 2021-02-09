# <a href="https://www.gatsbyjs.com"><img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="24" /></a> [corinatopor.com](https://corinatopor.com)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0-vortex%2Fcorinatopor.com.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2F0-vortex%2Fcorinatopor.com?ref=badge_shield) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![GitHub License](https://img.shields.io/badge/license-GPL--3.0-blue)](./LICENSE)

**Table of Contents**

- [corinatopor](#-corinatoporcom)
  - [Overview](#overview)
  - [Requirements](#requirements)
  - [Folder structure](#folder-structure)
  - [Installation](#installation)
  - [How to use](#how-to-use)
  - [Contributing](#contributing)

## Overview

## Requirements

In order to run the project from a container we need `node>=14.15.1` and `npm>=6.14.9` installed on our development machines.

## Folder structure

A quick look at the top-level files and directories you'll see in a Gatsby project.

```
├──── corinatopor.com
│  ├── .github/
│  ├── src/
│  ├── static/
│  ├── .editorconfig
│  ├── .eslintrc.js
│  ├── .gitattributes
│  ├── .gitignore
│  ├── .lintstagedrc.js
│  ├── .npmrc
│  ├── gatsby-browser.js
│  ├── gatsby-config.js
│  ├── gatsby-node.js
│  ├── gatsby-ssr.js
│  ├── LICENSE
│  ├── npm-shrinkwrap.json
│  ├── package.json
│  └── README.md
```

## Installation

Clone the package via `git`:

```shell
git clone git@github.com:0-vortex/corinatopor.com.git
```

Go into the cloned repository and install `node` dependencies:

```shell
npm install
```

## How to use

To develop locally just run:

```shell
npm start
```

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## Contributing

For `git` we are using the [GitHub Flow](https://githubflow.github.io).

This repository uses `husky` with pre-commit and message hooks. All you need to do after staging some files is to run:

```shell
npm run push
```
