import { TestBed, async } from '@angular/core/testing';
import { HomePage } from './app.component';
import { EquityListComponent } from './equity-analysis/equity-list/equity-list.component';
describe('EquityList', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePage,EquityListComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'chartanalysis'`, async(() => {
    const fixture = TestBed.createComponent(HomePage);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('chartanalysis');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Chart Analysis');
  }));
});
