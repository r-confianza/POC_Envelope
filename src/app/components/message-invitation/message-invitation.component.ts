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



  constructor(private router: Router, private messageService : MessageServiceService) {

  }
  ngOnIt(){
  }


  removeClass() {
    this.isClassAdded = false;
  }

  submit() {
    debugger
    const randomLocationX = Math.floor(Math.random() * (51 - 42) + 42);
    const randomLocationY = Math.floor(Math.random() * (51 - 42) + 42);
    let obj ={
      locationx:randomLocationX,
      locationy:randomLocationY,
      firstname:"john",
      message:this.message,
      speed:10,

    }
    this.messageService.addUserData(obj);
}
}
