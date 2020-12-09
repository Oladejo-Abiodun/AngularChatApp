import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  constructor(public fb : FormBuilder, public router : Router) { }

  public list = [];
  public usernameExist = false;
  public group=false;
  public mysrc;
  public disp=false
  public emailExist = false;
 public userForm  = this.fb.group({
  firstname : ['', [Validators.required]],
  email : ['', [this.validateEmail]],
  number : ['', [this.validatePhone]],
   address : ['', [Validators.required]],
   username: ['', [Validators.required]],
   password: ['', [this.validatePassword]],
   img:[''],
   
   comment:[''],
   confirm: ['', [this.validatePassword]]
  //  firstname : ['', [Validators.required, Validators.pattern("[a-zA-Z]{5,}")]],
  //  email : ['',  [Validators.required, Validators.email]],
  //  number : ['', [ [Validators.required]],
  //  address : ['',  [Validators.required]],
  //  username: ['',  [Validators.required]],
  //  password: ['',  [Validators.required]],
  //  confirm: ['',  [Validators.required]]
 })
  ngOnInit(): void {
    let user = []
    if(localStorage.getItem("chatusers")){
      user = JSON.parse(localStorage.chatusers)
        this.list = user
    }else{
      this.list = []
    }
    

  }
  validateName(control: AbstractControl){
    let name = /^[a-zA-Z]{5,10}$/;
    // console.log(control, "is control");
    if (control.value) {
      if (!name.test(control.value)) {
        return {inv:true}
      }
      return null
    }
    return {inv:false}

    ;
  }

      validatePhone(control: AbstractControl){
        let phone =  /^\(?[0-9]{4}\)?[-. ]?[0-9]{4}[-. ]?[0-9]{3}$/;
        if (control.value) {
          if (!phone.test(control.value)) {
            return {inv:true}
          } 
            return null
          
          return {inv:false}
        }
      }

      validateAddress(control: AbstractControl){
        let address = /^([a-zA-Z]{2})?(-[0-9]{1,3})?[.,]?[a-z]{5,10}[.,]?[a-zA-Z]{7,10}$/;
        if (control.value) {
          if (!address.test(control.value)) {
            return {inv: true}
          } 
            return null
        }
        return {inv:false}
      }

      
        validatePassword(control: AbstractControl){
           let password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
          if (control.value) {
            if (!password.test(control.value)) {
              return {inv: true}
            } 
              return null
          }
          return {inv:false}
        }

        validUsername(control: AbstractControl){
            let username = /^[a-zA-Z0-9]{10}$/;
            if (control.value) {
                if (!username.test(control.value)) {
                  return {inv: true}
                } 
                let checkUsername = localStorage.chatusers.findIndex(user => user.username == username)
                if(checkUsername >= 0){
                  return {alreadyExist: true}
                }
                return null
            }
            return {inv:false}
        }

        // checkUsername(username){
        //   let checkUsername = this.list.findIndex(user => user.username == username)
        //   if(checkUsername >= 0){
        //     this.usernameExist = true;
        //   }else{
        //     this.usernameExist = false;
        //   }
        // }
        validateEmail(control: AbstractControl){
          var email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-\.]+)\.([a-zA-Z]{2,5})$/;
          if (control.value) {
            if (!email.test(control.value)) {
              return {inv:true}
            } 
              return null 
          }
          return {inv:false}  
        }

        signin(){
          this.router.navigate(['signin'])
        }


        sign(){
          // if(this.usernameExist || this.emailExist) return;
          if (this.userForm.valid && this.userForm.controls['password'].value ==
           this.userForm.controls['confirm'].value) {
            let user = this.userForm.value;
            user.img=this.mysrc
            user.group=this.group
           this.list.push(user);
           localStorage.chatusers = JSON.stringify(this.list)
           this.userForm.reset()
           alert("successful")
           this.router.navigate(['signmessage'])
           }
           else{
            alert("no")
           }
        }
        img(){
this.disp=true
this.mysrc=this.userForm.value.img
console.log(this.mysrc)
// let n=this.mysrc.lastIndexOf('\\')
let y =  this.mysrc.split('\\')
this.mysrc = y[y.length-1]
// this.mysrc=this.mysrc.slice(n+1,this.mysrc.length)

let mysrc=`assets/pics/${this.mysrc}`
this.mysrc=mysrc
console.log(mysrc)
// console.log(mysrc)
// this.mysrc=mysrc

        }

        check(){
          if(!this.group){
            this.group=true
          }
        }
      }
