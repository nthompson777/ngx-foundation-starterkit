import { GlobalPipesModule } from './global-pipes.module';

describe('GlobalPipesModule', () => {
  let globalPipesModule: GlobalPipesModule;

  beforeEach(() => {
    globalPipesModule = new GlobalPipesModule();
  });

  it('should create an instance', () => {
    expect(globalPipesModule).toBeTruthy();
  });
});
