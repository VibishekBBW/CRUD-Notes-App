import { Component, OnInit } from '@angular/core';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth, db, storage } from 'src/app/app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email : string;
  password : string;

  handleAction(){
    console.log("Login");
    signInWithEmailAndPassword(auth, this.email, this.password);
    
  }

}
