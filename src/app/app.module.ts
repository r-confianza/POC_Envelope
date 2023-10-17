import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardScreenComponent } from './components/card-screen/card-screen.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { YesInvitationComponent } from './components/yes-invitation/yes-invitation.component';
import { NoInvitationComponent } from './components/no-invitation/no-invitation.component';
import { MayBeInvitationComponent } from './components/may-be-invitation/may-be-invitation.component';
import { MessageInvitationComponent } from './components/message-invitation/message-invitation.component';
import { MessageBundle } from '@angular/compiler';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardScreenComponent,
    PopUpComponent,
    YesInvitationComponent,
    NoInvitationComponent,
    MayBeInvitationComponent,
    MessageInvitationComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
