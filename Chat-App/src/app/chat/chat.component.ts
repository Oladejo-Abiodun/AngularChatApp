import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(public service : MessageService) { }

    public collect = JSON.parse(localStorage.chatusers)
    public getusers = JSON.parse(localStorage.usersaccount)
    public message;
    public msg;
    public list = []
    public active
    public xend;
    public filterItem;
    public selected = {username:'', img:''};
    public msgArray = [];

    

  ngOnInit(): void {
    let d=this.getusers
    this.msgArray = JSON.parse(localStorage.getItem("message"));
    console.log(this.msgArray);
    this.collect=this.collect.filter(each=> each.number!==d.number)
    this.service.getMessage.subscribe(
      data=> {
      this.msg=data
      }
    )
    let user = []
    if(localStorage.message){
      user = JSON.parse(localStorage.message)
        this.list = user
    }else{
      this.list = []
    }
    let getUserMsg = this.msgArray.filter(user => user.sender == this.getusers.number || user.receiver == this.getusers.number);
    console.log(getUserMsg);

    this.collect.map(collect => {
      let ourMessage = getUserMsg.filter(msg => msg.receiver == collect.number || msg.sender == collect.number);
      let recentMessage = ourMessage[ourMessage.length - 1];
      if (recentMessage) {
        collect.message = recentMessage.message;
      } else {
        collect.message = "No recent Message";
      }
    })
  }
  
    details(i, number,name,img){
      let users=JSON.parse(localStorage.usersaccount)
      let arr=[]
      this.active = number
      this.service.dataSource.next(number)
      this.selected = this.collect.find(a=>a.number == number && a.img == img)
      console.log(this.getusers)
let myArr=JSON.parse(localStorage.message)

myArr.forEach(
  function(each){
    if((each.sender==users.username && each.receiver==number) ||
     (each.sender==name && each.receiver==users.number) || (each.receiver == number)){
    arr.push(each)
    }
  }
)
arr.forEach(
  function(each){
    if(each.sender==users.username){
      each.check=true
    }
    else{
      each.check=false
    }
  }
)
this.msg=arr
this.service.getMessages(this.msg)    
    }



    send(){
      let date = new Date()
      let min = date.getMinutes()
      let hour = date.getHours()
      let obj = {sender: this.getusers.number, receiver:
      this.active, message: this.message, time: `${hour} : ${min}`}
      this.list.push(obj)  
      this.msg.push(obj)
      console.log(this.message)
      let users=JSON.parse(localStorage.usersaccount).username
      this.msg.forEach(
        function(each){
          if(each.sender==users){
            each.check=true
          }
          else{
            each.check=false
          }
        }
      )
      this.service.getMessages(this.msg)
      localStorage.message = JSON.stringify(this.list)
      this.message = "";
    }

   delete(i){
     let messages = JSON.parse(localStorage.message)
    messages.splice(i,1)
    this.msg.splice(i,1)
    localStorage.message = JSON.stringify(messages)
  }

  pre(){
    alert("hello")
  }
}
