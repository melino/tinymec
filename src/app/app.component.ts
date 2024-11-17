import { Component } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { TinyMceConfigService } from './tiny-mce-config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EditorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';

  tinyMceConfig: EditorComponent['init'];

  constructor(
    private tinyMceConfigService: TinyMceConfigService
  ) {
    this.tinyMceConfig = this.tinyMceConfigService.config;
  }

}
