/**
 * Learning Package API
 * API for managing learning packages and associated facts.
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */
import {__decorate, __param} from "tslib";
import {Inject, Injectable, Optional} from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {CustomHttpUrlEncodingCodec} from '../encoder';
import {BASE_PATH} from '../variables';
import {Configuration} from '../configuration';

let DefaultService = class DefaultService {
  httpClient;
  basePath = '/';
  defaultHeaders = new HttpHeaders();
  configuration = new Configuration();

  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  createLearningFact(body, id, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createLearningFact.');
    }
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling createLearningFact.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'application/json'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [
      'application/json'
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/package/${encodeURIComponent(String(id))}/fact`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  createLearningPackage(body, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createLearningPackage.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'application/json'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [
      'application/json'
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/package`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  deleteLearningFact(id, factId, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteLearningFact.');
    }
    if (factId === null || factId === undefined) {
      throw new Error('Required parameter factId was null or undefined when calling deleteLearningFact.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/api/package/${encodeURIComponent(String(id))}/fact`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  deleteLearningPackage(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteLearningPackage.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/api/package/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  getAllPackages(observe = 'body', reportProgress = false) {
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'application/json'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/package`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  getPackageById(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getPackageById.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'application/json'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/package/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  getPackageFacts(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getPackageFacts.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'application/json'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/package/${encodeURIComponent(String(id))}/fact`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  getPackageSummaries(observe = 'body', reportProgress = false) {
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'application/json'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/package-summaries`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  getSwaggerJson(observe = 'body', reportProgress = false) {
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'application/json'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/swagger.json`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  livenessCheck(observe = 'body', reportProgress = false) {
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'text/plain'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/liveness`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  searchLearningPackages(id, title, category, difficulty, observe = 'body', reportProgress = false) {
    let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
    if (id !== undefined && id !== null) {
      queryParameters = queryParameters.set('id', id);
    }
    if (title !== undefined && title !== null) {
      queryParameters = queryParameters.set('title', title);
    }
    if (category !== undefined && category !== null) {
      queryParameters = queryParameters.set('category', category);
    }
    if (difficulty !== undefined && difficulty !== null) {
      queryParameters = queryParameters.set('difficulty', difficulty);
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'application/json'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/package-summaries/search`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  updateLearningFact(body, id, factId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateLearningFact.');
    }
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateLearningFact.');
    }
    if (factId === null || factId === undefined) {
      throw new Error('Required parameter factId was null or undefined when calling updateLearningFact.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'application/json'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [
      'application/json'
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/api/package/${encodeURIComponent(String(id))}/fact`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  updateLearningPackage(body, id, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateLearningPackage.');
    }
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateLearningPackage.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [
      'application/json'
    ];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [
      'application/json'
    ];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/api/package/${encodeURIComponent(String(id))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
};
DefaultService = __decorate([
  Injectable(),
  __param(1, Optional()),
  __param(1, Inject(BASE_PATH)),
  __param(2, Optional())
], DefaultService);
export {DefaultService};
//# sourceMappingURL=default.service.js.map
