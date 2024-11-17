import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TinyMceConfigService {
  config = {
    base_url: '/tinymce',
    suffix: '.min',
    promotion: false,
    branding: false,
    license_key: 'gpl',
  };
}