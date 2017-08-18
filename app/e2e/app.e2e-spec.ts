import { ElectronTestePage } from './app.po';

describe('electron-teste App', () => {
  let page: ElectronTestePage;

  beforeEach(() => {
    page = new ElectronTestePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to alt!');
  });
});
