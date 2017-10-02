import { FerryAppPage } from './app.po';

describe('ferry-app App', () => {
  let page: FerryAppPage;

  beforeEach(() => {
    page = new FerryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
