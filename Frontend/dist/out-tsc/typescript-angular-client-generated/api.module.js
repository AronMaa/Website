var ApiModule_1;
import {__decorate, __param} from "tslib";
import {NgModule, SkipSelf, Optional} from '@angular/core';
import {Configuration} from './configuration';
import {DefaultService} from './api/default.service';

let ApiModule = ApiModule_1 = class ApiModule {
  static forRoot(configurationFactory) {
    return {
      ngModule: ApiModule_1,
      providers: [{provide: Configuration, useFactory: configurationFactory}]
    };
  }

  constructor(parentModule, http) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
};
ApiModule = ApiModule_1 = __decorate([
  NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
      DefaultService
    ]
  }),
  __param(0, Optional()),
  __param(0, SkipSelf()),
  __param(1, Optional())
], ApiModule);
export {ApiModule};
//# sourceMappingURL=api.module.js.map
