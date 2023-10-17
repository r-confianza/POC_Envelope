import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-invitation',
  templateUrl: './no-invitation.component.html',
  styleUrls: ['./no-invitation.component.css']
})
export class NoInvitationComponent {
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
}
