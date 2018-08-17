import { VoluntAdministradorPage } from './app.po';

describe('volunt-administrador App', function() {
  let page: VoluntAdministradorPage;

  beforeEach(() => {
    page = new VoluntAdministradorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
