import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInvitationComponent } from './message-invitation.component';

describe('MessageInvitationComponent', () => {
  let component: MessageInvitationComponent;
  let fixture: ComponentFixture<MessageInvitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageInvitationComponent]
    });
    fixture = TestBed.createComponent(MessageInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
