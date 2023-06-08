import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OotdComponent } from './ootd.component';

describe('OfdtComponent', () => {
  let component: OotdComponent;
  let fixture: ComponentFixture<OotdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OotdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OotdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
