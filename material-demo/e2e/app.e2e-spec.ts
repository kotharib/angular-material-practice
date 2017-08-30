import { MaterialDemoPage } from './app.po';

describe('material-demo App', () => {
  let page: MaterialDemoPage;

  beforeEach(() => {
    page = new MaterialDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
