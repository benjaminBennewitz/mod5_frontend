import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

constructor(private as:AuthService, private router:Router){}

 async login(){
    try{
      let resp = await this.as.loginWithUserAndPassword(this.username, this.password);

      let json = await resp.json();
      localStorage.setItem('token', json.token);
      
      console.log(resp);
      this.router.navigateByUrl('/todos');
    } catch(e){
      alert('Login declined')
        console.error(e);
      }
  }
}

