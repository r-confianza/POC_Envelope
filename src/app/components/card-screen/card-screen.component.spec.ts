import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScreenComponent } from './card-screen.component';

describe('CardScreenComponent', () => {
  let component: CardScreenComponent;
  let fixture: ComponentFixture<CardScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardScreenComponent]
    });
    fixture = TestBed.createComponent(CardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
