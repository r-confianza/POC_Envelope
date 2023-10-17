import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YesInvitationComponent } from './components/yes-invitation/yes-invitation.component';
import { NoInvitationComponent } from './components/no-invitation/no-invitation.component';
import { MayBeInvitationComponent } from './components/may-be-invitation/may-be-invitation.component';
import { MessageInvitationComponent } from './components/message-invitation/message-invitation.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { CardScreenComponent } from './components/card-screen/card-screen.component';

const routes: Routes = [
  { path: 'yes', component: YesInvitationComponent },
  { path: 'no', component: NoInvitationComponent },
  { path: 'mayBe', component: MayBeInvitationComponent },
  { path: 'message', component: MessageInvitationComponent },
  { path: 'success', component: SuccessPageComponent },
  { path: 'card', component: CardScreenComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
