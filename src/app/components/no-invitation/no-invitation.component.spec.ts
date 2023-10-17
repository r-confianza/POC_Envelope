import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoInvitationComponent } from './no-invitation.component';

describe('NoInvitationComponent', () => {
  let component: NoInvitationComponent;
  let fixture: ComponentFixture<NoInvitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoInvitationComponent]
    });
    fixture = TestBed.createComponent(NoInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
