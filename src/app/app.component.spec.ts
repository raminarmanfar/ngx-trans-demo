import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);

    translateService = TestBed.inject(TranslateService);
    translateService.setTranslation('de', await import('../assets/i18n/de.json'));

    translateService.setDefaultLang('de');
    translateService.use('de');

    fixture.detectChanges();
  });

  it('should translate the text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Servus');
  });
});
