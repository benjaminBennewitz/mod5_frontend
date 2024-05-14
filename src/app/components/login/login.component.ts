import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username:string = '';
  password:string = '';

constructor(private as:AuthService){}

 async login(){
    try{
      let resp = await this.as.loginWithUserAndPassword(this.username, this.password);
      console.log(resp);
    } catch(e){
        console.error(e);
      }
  }
}

