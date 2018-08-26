import { EquityAnalysisModule } from './equity-analysis.module';

describe('EquityAnalysisModule', () => {
  let equityAnalysisModule: EquityAnalysisModule;

  beforeEach(() => {
    equityAnalysisModule = new EquityAnalysisModule();
  });

  it('should create an instance', () => {
    expect(equityAnalysisModule).toBeTruthy();
  });
});
