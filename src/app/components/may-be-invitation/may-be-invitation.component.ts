import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-may-be-invitation',
  templateUrl: './may-be-invitation.component.html',
  styleUrls: ['./may-be-invitation.component.css']
})
export class MayBeInvitationComponent {
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
