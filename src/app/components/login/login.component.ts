import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,],
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

