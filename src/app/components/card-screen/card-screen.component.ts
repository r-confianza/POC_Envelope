import { Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MessageServiceService } from 'src/app/service/message-service.service';

@Component({
  selector: 'app-card-screen',
  templateUrl: './card-screen.component.html',
  styleUrls: ['./card-screen.component.css'],
  animations: [
    trigger('buttonHide', [
      state('visible', style({ opacity: 1 , transition: '1.5s ease-out'})),
      state('hidden', style({ opacity: 0, display: 'none', transition: '1.5s ease-out' })),
      transition('visible => hidden', animate('30s')),
    ]),
    trigger('panAnimationLeft', [
      state('closed', style({ transform: 'rotateY(0deg)', transition: '1.5s ease-out' })),
      state('open', style({ transform: 'rotateY(90deg)', transition: '1.5s ease-out' })),
      transition('closed => open', animate('5s')),
      transition('open => closed', animate('5s')),
    ]),
    trigger('panAnimationRight', [
      state('closed', style({ transform: 'rotateY(0deg)', transition: '1.5s ease-out' })),
      state('open', style({ transform: 'rotateY(90deg)', transition: '1.5s ease-out' })),
      transition('closed => open', animate('5s')),
      transition('open => closed', animate('5s')),
    ]),
    trigger('videoAnimation', [
      state('initial', style({ opacity: 0 })),
      state('final', style({ opacity: 1 })),
      transition('initial => final', animate('0.5s')),
    ]),
    trigger('buttonShow', [
      state('hidden', style({ opacity: 0, transform: 'translateY(50px)' })),
      state('show', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => show', animate('1s')),
    ]),
  ],
})
export class CardScreenComponent {
  userData: any;
  buttonState: 'visible' | 'hidden' = 'visible';
  leftAnimationState: 'closed' | 'open' = 'closed';
  rightAnimationState: 'closed' | 'open' = 'closed';
  videoAnimationState = 'initial';
  buttons: 'hidden' | 'show' = 'hidden';
  paymenytConfirmModelRef !: NgbModalRef;
 

  constructor(public modelService: NgbModal,private messageService: MessageServiceService) {

  }

  ngOnInit() {
    debugger
      this.userData = this.messageService.getUserDataCollection();
    console.log("hua",this.userData)
  }

  toggleAnimation() {
    debugger
    this.buttonState = 'hidden';
    this.leftAnimationState = this.leftAnimationState === 'closed' ? 'open' : 'closed';
    this.rightAnimationState = this.rightAnimationState === 'closed' ? 'open' : 'closed';
    setTimeout(() => {
      this.videoAnimationState = 'final';
    }, 500);

  }
}
