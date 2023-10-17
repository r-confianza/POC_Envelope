import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayBeInvitationComponent } from './may-be-invitation.component';

describe('MayBeInvitationComponent', () => {
  let component: MayBeInvitationComponent;
  let fixture: ComponentFixture<MayBeInvitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayBeInvitationComponent]
    });
    fixture = TestBed.createComponent(MayBeInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
