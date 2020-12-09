import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  public dataSource = new BehaviorSubject(Number)

  public getMessage = new BehaviorSubject([])
  
  getMessages(item){
    this.getMessage.next(item)
  }
}



