describe('smoke', () => {
  it('loads the package manifest', () => {
    const pkg = require('../package.json');
    expect(pkg.name).toBe('cortex');
  });

  it('loads core runtime dependencies', () => {
    expect(() => require('ajv')).not.toThrow();
    expect(() => require('express')).not.toThrow();
  });
});
