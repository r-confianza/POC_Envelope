import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesInvitationComponent } from './yes-invitation.component';

describe('YesInvitationComponent', () => {
  let component: YesInvitationComponent;
  let fixture: ComponentFixture<YesInvitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YesInvitationComponent]
    });
    fixture = TestBed.createComponent(YesInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
