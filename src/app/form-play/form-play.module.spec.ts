import { FormPlayModule } from './form-play.module';

describe('FormPlayModule', () => {
  let formPlayModule: FormPlayModule;

  beforeEach(() => {
    formPlayModule = new FormPlayModule();
  });

  it('should create an instance', () => {
    expect(formPlayModule).toBeTruthy();
  });
});
