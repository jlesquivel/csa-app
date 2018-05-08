/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Boleta2Service } from './boleta2.service';

describe('Service: Boleta2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Boleta2Service]
    });
  });

  it('should ...', inject([Boleta2Service], (service: Boleta2Service) => {
    expect(service).toBeTruthy();
  }));
});