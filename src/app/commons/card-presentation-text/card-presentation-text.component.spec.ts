import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPresentationTextComponent } from './card-presentation-text.component';

describe('CardPresentationTextComponent', () => {
  let component: CardPresentationTextComponent;
  let fixture: ComponentFixture<CardPresentationTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPresentationTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPresentationTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
