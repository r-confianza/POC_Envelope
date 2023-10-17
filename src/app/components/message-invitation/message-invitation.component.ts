import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserData } from 'src/app/model/messageData';
import { MessageServiceService } from 'src/app/service/message-service.service';

@Component({
  selector: 'app-message-invitation',
  templateUrl: './message-invitation.component.html',
  styleUrls: ['./message-invitation.component.css']
})
export class MessageInvitationComponent {
  isClassAdded = false;
  message: string = '';

  constructor(private router: Router, private messageService: MessageServiceService) {

  }
  ngOnIt() {
  }


  removeClass() {
    this.isClassAdded = false;
  }

  submit() {
    debugger
    const randomSpeed = Math.floor(Math.random() * 50) + 1;
    let top = this.messageService.getUserDataCollection().length * 10;
    let obj = {
      firstname: "john",
      top: top + "%",
      message: this.message + "" + top,
      speed: randomSpeed,

    }
    this.messageService.addUserData(obj);
  }
}
