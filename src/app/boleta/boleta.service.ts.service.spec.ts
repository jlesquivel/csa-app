/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Boleta.service.tsService } from './boleta.service.ts.service';

describe('Service: Boleta.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Boleta.service.tsService]
    });
  });

  it('should ...', inject([Boleta.service.tsService], (service: Boleta.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});