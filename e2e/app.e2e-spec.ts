import { TestAngular2Rc4Page } from './app.po';

describe('test-angular2-rc4 App', function() {
  let page: TestAngular2Rc4Page;

  beforeEach(() => {
    page = new TestAngular2Rc4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
