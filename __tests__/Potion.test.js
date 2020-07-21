const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    //  create new Potion objects with a property name of 'health'
    const potion = new Potion('health');
  
    // takes a constructor as an argument
    expect(potion.name).toBe('health');
    // property that is a number of some kind
    expect(potion.value).toEqual(expect.any(Number));
  });