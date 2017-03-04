import { CuppaNg2DatatablePage } from './app.po';

describe('cuppa-ng2-datatable App', () => {
  let page: CuppaNg2DatatablePage;

  beforeEach(() => {
    page = new CuppaNg2DatatablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
