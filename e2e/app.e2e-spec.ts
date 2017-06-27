import { VetclinicClientAngular2Page } from './app.po';

describe('vetclinic-client-angular2 App', () => {
  let page: VetclinicClientAngular2Page;

  beforeEach(() => {
    page = new VetclinicClientAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
