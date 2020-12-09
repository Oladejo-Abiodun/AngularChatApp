import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageModule } from './message/message.module';
import { SignmessageComponent } from './signmessage/signmessage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { ChildComponent } from './child/child.component';
import {MatCardModule} from '@angular/material/card';
import { SearchPipe } from './search.pipe';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SiginComponent,
    SignmessageComponent,
    ChatComponent,
    ChildComponent,
    SearchPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MessageModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
   MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
