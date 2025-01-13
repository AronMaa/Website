import {__decorate} from "tslib";
import {Injectable} from '@angular/core';

const STORAGE_KEY = 'lesson-app:lastLessonId';
let UserSettingsService = class UserSettingsService {
  _lastLessonId = null;
  get lastLessonId() {
    return this._lastLessonId;
  }

  set lastLessonId(value) {
    this._lastLessonId = value;
    this.saveInfoToLocalStorage();
  }

  constructor() {
    const storedInfo = this.loadInfoFromLocalStorage();
    this._lastLessonId = storedInfo.lastLessonId || null;
  }

  loadInfoFromLocalStorage() {
    const storedJson = window.localStorage.getItem(STORAGE_KEY);
    let res = (storedJson) ? JSON.parse(storedJson) : {
      lastLessonId: null
    };
    console.log('reading localStorage item ' + STORAGE_KEY, res);
    return res;
  }

  saveInfoToLocalStorage() {
    const info = {lastLessonId: this.lastLessonId};
    let json = JSON.stringify(info);
    console.log('writing localStorage item ' + STORAGE_KEY, info);
    window.localStorage.setItem(STORAGE_KEY, json);
  }
};
UserSettingsService = __decorate([
  Injectable({
    providedIn: 'root'
  })
], UserSettingsService);
export {UserSettingsService};
//# sourceMappingURL=user-settings.service.js.map
