import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClotheComponent } from './card-clothe.component';

describe('CardClotheComponent', () => {
  let component: CardClotheComponent;
  let fixture: ComponentFixture<CardClotheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardClotheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
