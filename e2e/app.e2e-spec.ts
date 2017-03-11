import { CreditPage } from './app.po';

describe('credit App', function() {
  let page: CreditPage;

  beforeEach(() => {
    page = new CreditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
