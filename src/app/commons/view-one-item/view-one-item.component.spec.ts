import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOneItemComponent } from './view-one-item.component';

describe('ViewOneItemComponent', () => {
  let component: ViewOneItemComponent;
  let fixture: ComponentFixture<ViewOneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOneItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
