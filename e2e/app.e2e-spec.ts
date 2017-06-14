import { Cp2FrontendPage } from './app.po';

describe('cp2-frontend App', () => {
  let page: Cp2FrontendPage;

  beforeEach(() => {
    page = new Cp2FrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
