import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signmessage',
  templateUrl: './signmessage.component.html',
  styleUrls: ['./signmessage.component.css']
})
export class SignmessageComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

    signin(){
      this.router.navigate(['signin'])
    }
}
