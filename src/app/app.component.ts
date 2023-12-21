import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-trans-demo';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
    translate.use('de');
  }
}
