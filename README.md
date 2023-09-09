# Clean Times

[![codecov](https://img.shields.io/codecov/c/github/josegoval/clean-times?style=for-the-badge)](https://codecov.io/gh/josegoval/clean-times)
![npm bundle size](https://img.shields.io/bundlephobia/min/clean-times?style=for-the-badge)
[![https://nodei.co/npm/clean-times.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/clean-times.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/clean-times)

`clean-times` is a JS and TS library that help you write clean code times.

**Feel like supporting this free plugin?**

<a href="https://www.buymeacoffee.com/josegoval" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

**Table of Contents**

- [Installation](#installation)
- [Example usage](#example-usage)
- [Main Functions](#main-functions)
- [Utility functions](#utility-functions)
- [Other utilities](#other-utilities)

## Installation

```bash
npm install --save clean-times
```

or

```bash
yarn add clean-times
```

## Example usage

Import and use as follow with ES6 syntax:

```ts
import { getDaysInMS, FIVE_DAYS_IN_MS } from "clean-times";

console.log(getDaysInMs(5)) 
console.log(FIVE_DAYS_IN_MS) 
```

For node environments without ES6 use `require` as follows:

```ts

const { getDaysInMS, FIVE_DAYS_IN_MS } = require("clean-times")

console.log(getDaysInMs(5)) 
console.log(FIVE_DAYS_IN_MS) 
```