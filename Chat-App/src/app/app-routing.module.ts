import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChildComponent } from './child/child.component';
import { SignGuard } from './home/guards/sign.guard';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './sigin/sigin.component';
import { SignmessageComponent } from './signmessage/signmessage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SiginComponent},
  {path: 'child', component: ChildComponent},
  {path: 'signmessage', component: SignmessageComponent},
  {path: 'chat', component: ChatComponent, canActivate:[SignGuard]},
  {path: 'signup',component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
