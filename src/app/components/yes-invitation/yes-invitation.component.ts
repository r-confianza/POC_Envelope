import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yes-invitation',
  templateUrl: './yes-invitation.component.html',
  styleUrls: ['./yes-invitation.component.css']
})
export class YesInvitationComponent {
  isClassAdded = false;

  constructor(private router: Router) {

  }

  ngOnIt(){
  }
  removeClass() {
    this.isClassAdded = false;
  }

  back() {
    this.router.navigate(['card']);
  }

  success() {
    this.router.navigate(['success']);
  }
}
