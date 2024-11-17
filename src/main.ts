import { bootstrapApplication } from '@angular/platform-browser';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
      { provide: TINYMCE_SCRIPT_SRC,
          useValue: 'tinymce/tinymce.min.js' }
    ]
}).catch(err => console.error(err));