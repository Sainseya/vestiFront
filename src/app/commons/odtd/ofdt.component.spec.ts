import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfdtComponent } from './ofdt.component';

describe('OfdtComponent', () => {
  let component: OfdtComponent;
  let fixture: ComponentFixture<OfdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfdtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
