jest.mock('noop');
const test = require('../');

it('should be no-op', () => {
    expect(test.mock).toBeUndefined();
});