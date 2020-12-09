import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  constructor(public router : Router) { }

  public collect = JSON.parse(localStorage.chatusers)
  public getusers = JSON.parse(localStorage.usersaccount)
  public getList = []
  public username = ""
  public password = ""
  public phone;

  ngOnInit(): void {
  }
  
  signup(){
    this.router.navigate(['signup'])
  }


  signin(){
    let math = Math.floor(1234 + Math.random() * 1234)
          let obj = {Calc: math}
          localStorage.calculate = JSON.stringify(obj)
    this.getList = JSON.parse(localStorage.chatusers);
    console.log(this.getList);

      let collect = this.getList.find(data=> this.username == data.username || this.username == data.email 
        && data.password == this.password
      )
        if (collect) {
          this.phone=collect.number
          let obj = {username: this.username, password: this.password,number:this.phone,img:collect.img}
          localStorage.usersaccount = JSON.stringify(obj)
          alert(`Welcome ${this.username} to Busta's chatApp`)
          this.router.navigate(['chat'])

        } else {
          alert("Incorrect username or password")
        }  
  }
}
