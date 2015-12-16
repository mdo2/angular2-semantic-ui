/// <reference path="../../src/typings/_custom.d.ts" />

// Import necessary wrappers for Jasmine
import {
  beforeEachProviders,
  describe,
  expect,
  iit,
  inject,
  it,
  injectAsync,
  fakeAsync,
  TestComponentBuilder,
  tick
} from 'angular2/testing';
import { Component, provide} from 'angular2/core';
import { BaseRequestOptions, Http} from 'angular2/http';
import { MockBackend } from 'angular2/http/testing';

// Load the implementations that should be tested
import { App } from '../../src/app/app';

describe('App', () => {

  beforeEachProviders(() => [
    App,
    BaseRequestOptions,
    MockBackend,
    provide(Http, {useFactory:
      function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]})
  ]);

  // it('should have a title', inject([App], (app) => {
  //   expect(app.title).toEqual('Angular 2');
  // }));

});
