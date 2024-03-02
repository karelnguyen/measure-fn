# measure-fn

**measure-fn** is a lightweight npm package that measures the execution time of JavaScript functions. It provides a simple and efficient way to analyze the performance of your functions.

## Installation

You can install **measure-fn** via npm:

```js
npx jsr add @jitaro/measure-fn
```

## Usage

```js
import { measure } from 'measure-fn';

const yourFunction = () => {
  ...
}

console.log(measure(yourFunction)) // ms
console.log(measure(yourFunction, 's')) // seconds

```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
