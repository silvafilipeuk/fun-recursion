# Testing for Side Effects

Generally, when creating functions in JavaScript, it is a good idea to build **pure functions**.
A pure function is a function that:

- Given the same input, will always return the same output.
- Produces no side effects.

Side effects can include:

- Modifying any external variable or object property (e.g. a global variable, or a variable in the parent function scope chain)
- Logging to the console
- Writing to a file
- Writing to the network
- Triggering any external process
- Calling any other functions with side-effects

However, sometimes we have to create functions that _do_ have to cause side effects. An example could be a function that logs some output to the console. If this side effect is a key part of the functions behaviour, we should test for it.

## Using a spy to wrap an existing method

There is an example of how to spy on an existing function in the [sinon documentation](https://sinonjs.org/releases/v7.5.0/spies/) under the heading "Using a spy to wrap an existing method".

> `spy(object, "method")` creates a spy that wraps the existing function: `object.method`. The spy will behave exactly like the original method (including when used as a constructor), but you will have access to data about all calls.

Below is an example of wrapping `console.log` in a spy, and checking whether it has been invoked:

```js
const { spy } = require('sinon');
const { expect } = require('chai');

spy(console, 'log');

console.log('hello');

expect(console.log.callCount).to.equal(1);
```

## Mocha Hooks

Once we have set up a spy on an existing function, we will want to ensure that the `callCount` and all other properties are reset between each test. To do this, we can use [Mocha Hooks](https://mochajs.org/#hooks) to get Mocha to run functions at certain points in the testing suite. For example, Mocha will run the function passed to `beforeEach` before every subsequent `it` block.

In the example below, we wrap `console.log` in a spy before every `it` block, and remove it after every it block.

```js
const { spy } = require('sinon');
const { expect } = require('chai');

describe('spying on console log', () => {
  beforeEach(() => {
    spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('console log has been called once', () => {
    console.log('hello');
    expect(console.log.callCount).to.equal(1);
  });

  it('console log has not been called', () => {
    expect(console.log.callCount).to.equal(0);
  });
});
```

Try running the example with Mocha to see the results.
What happens when you remove the `afterEach`?
What about the `beforeEach`?
