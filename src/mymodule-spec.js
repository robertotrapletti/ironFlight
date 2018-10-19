import { myModule } from './myModule';

describe('mymodule isolated unit test', () => {

  it('myModule should be an object', () => {
    expect(typeof myModule).toBe('object');
  });
  it('myModule should have a hello property', () => {
    expect(myModule.hello).toBeDefined();
  })
});