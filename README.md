# jest-test

Feature request to allow `__mocks__` to be under `__test__` for mocked `node_modules`. That is, allow mocked `node_modules` to live in `<rootDir>` no matter where that resides.

Per the [docs](https://facebook.github.io/jest/docs/manual-mocks.html#content), mocked node modules should live in a `__mocks__` folder adjacent to `node_modules`.

However, it currently works if you nest `__mocks__` under the `<rootDir>`. One can put `__mocks__` under `__test__` and the mocked module will be loaded (as this sample repo illustrates). 

Clone this repo, install node modules and run `npm test`.

