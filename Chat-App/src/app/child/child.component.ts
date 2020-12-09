import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  public list = []
  public getIndex;
  public user;
  constructor(public service : MessageService) { }

  ngOnInit(): void {
    this.list = JSON.parse(localStorage.chatusers)
    this.service.dataSource.subscribe(any =>{
        this.getIndex = this.list.find(a=>a.number == any )
      
      // this.user = this.list.find((user, i)=> i == this.getIndex);
    })
  }
}
