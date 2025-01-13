import {__decorate} from "tslib";
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

export class LearningPackageModel {
  dto;

  constructor(dto) {
    this.dto = dto;
    Object.assign(this, dto);
  }
}

let LearningPackageService = class LearningPackageService {
  http;
  apiUrl = 'http://localhost:3000/api/learning-packages'; // Update with your API URL
  constructor(http) {
    this.http = http;
  }

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  create(packageData) {
    return this.http.post(this.apiUrl, packageData);
  }

  update(id, packageData) {
    return this.http.put(`${this.apiUrl}/${id}`, packageData);
  }

  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAllModel() {
    return this.http
      .get(this.apiUrl)
      .pipe(map(dtoArray => dtoArray.map(dto => new LearningPackageModel(dto))));
  }

  getByIdModel(id) {
    return this.http
      .get(`${this.apiUrl}/${id}`)
      .pipe(map(dto => new LearningPackageModel(dto)));
  }

  createModel(packageData) {
    return this.http
      .post(this.apiUrl, packageData)
      .pipe(map(dto => new LearningPackageModel(dto)));
  }

  updateModel(id, packageData) {
    return this.http.put(`${this.apiUrl}/${id}`, packageData);
  }

  deleteModel(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAllApi() {
    return this.http
      .get(this.apiUrl)
      .pipe(map(dtoArray => dtoArray.map(dto => new LearningPackageModel(dto))));
  }

  getByIdApi(id) {
    return this.http
      .get(`${this.apiUrl}/${id}`)
      .pipe(map(dto => new LearningPackageModel(dto)));
  }

  createApi(packageData) {
    return this.http
      .post(this.apiUrl, packageData)
      .pipe(map(dto => new LearningPackageModel(dto)));
  }

  updateApi(id, packageData) {
    return this.http
      .put(`${this.apiUrl}/${id}`, packageData)
      .pipe(map(() => {
      })); // No DTO to map, just a void response
  }

  deleteApi(id) {
    return this.http
      .delete(`${this.apiUrl}/${id}`)
      .pipe(map(() => {
      })); // No DTO to map, just a void response
  }
};
LearningPackageService = __decorate([
  Injectable({
    providedIn: 'root',
  })
], LearningPackageService);
export {LearningPackageService};
//# sourceMappingURL=learning-package.service.js.map
