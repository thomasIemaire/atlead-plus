import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { preset } from './app/static/default';
import { DialogModule } from 'primeng/dialog';
import { importProvidersFrom } from '@angular/core';
import { provideLottieOptions } from 'ngx-lottie';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: preset,
        options: {
          prefix: 'atlead',
          darkModeSelector: false,
          cssLayer: false,
        },
      },
    }),
    importProvidersFrom(DialogModule),
    provideLottieOptions({
      player: () => import('lottie-web')
    }),
  ],
}).catch(err => console.error(err));
