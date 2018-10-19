
describe('scaffolding homepage', function() {
  
  it('should have the right title', () => {
    browser.driver.get('http://localhost:8080');
    expect(browser.driver.getTitle()).toEqual('Scaffolding');
  });

  it('should add a div containing the "World!" string', function() {
    browser.driver.get('http://localhost:8080');
    browser.driver.findElement(by.tagName('button')).click();
    browser.driver.findElement(by.tagName('div')).getText().then((text) => {
      expect(text).toBe('42');
    })
  });
});