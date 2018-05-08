/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {ListaClaseService} from './lista-clase.service';

describe('Service: ListaClase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaClaseService]
    });
  });

  it('should ...', inject([ListaClaseService], (service: ListaClaseService) => {
    expect(service).toBeTruthy();
  }));
});
