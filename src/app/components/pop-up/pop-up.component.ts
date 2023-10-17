import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  paymenytConfirmModelRef !: NgbModalRef;
  isClassAdded = false;
  isClassMapAdded = false;
  

  constructor(public modelService: NgbModal, private router: Router) {

  }

  ngOnIt(){
  }

  addClass() {
    this.isClassAdded = true;
  }

  addMapClass() {
    debugger
    this.isClassMapAdded = true;
  }

  removeClass() {
    this.isClassAdded = false;
  }
  yes() {
    this.router.navigate(['yes']);
  }

  no() {
    this.router.navigate(['no']);
  }

  mayBe() {
    this.router.navigate(['mayBe']);
  }

  message() {
    this.router.navigate(['message']);
  }
}
