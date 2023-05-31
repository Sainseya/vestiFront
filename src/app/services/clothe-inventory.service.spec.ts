/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClotheInventoryService } from './clothe-inventory.service';

describe('Service: ClotheInventory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClotheInventoryService]
    });
  });

  it('should ...', inject([ClotheInventoryService], (service: ClotheInventoryService) => {
    expect(service).toBeTruthy();
  }));
});
