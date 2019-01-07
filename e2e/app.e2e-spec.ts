import { CartGeneratorPage } from './app.po';

describe('cart-generator App', function() {
  let page: CartGeneratorPage;

  beforeEach(() => {
    page = new CartGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
