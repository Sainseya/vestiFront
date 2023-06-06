import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInMenuComponent } from './select-in-menu.component';

describe('SelectInMenuComponent', () => {
  let component: SelectInMenuComponent;
  let fixture: ComponentFixture<SelectInMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectInMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
