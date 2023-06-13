import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWelcomePageComponent } from './modal-welcome-page.component';

describe('ModalWelcomePageComponent', () => {
  let component: ModalWelcomePageComponent;
  let fixture: ComponentFixture<ModalWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWelcomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
