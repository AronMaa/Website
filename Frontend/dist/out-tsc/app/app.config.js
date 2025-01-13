import {provideZoneChangeDetection, importProvidersFrom} from '@angular/core';
import {provideRouter, withHashLocation} from '@angular/router';
import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {ApiModule, Configuration} from '../typescript-angular-client-generated';

const apiConfParams = {
  basePath: 'http://localhost:4200/' // override generated code
};
export const appConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    importProvidersFrom(ApiModule.forRoot(() => new Configuration(apiConfParams)))
  ]
};
//# sourceMappingURL=app.config.js.map
