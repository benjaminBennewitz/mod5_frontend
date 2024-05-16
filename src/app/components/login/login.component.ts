import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Benutzerdefinierter Typ für die Antwort von loginWithUserAndPassword
interface LoginResponse {
  token: string; // Annahme: Das Token ist ein String
  // Hier können weitere Attribute hinzugefügt werden, falls vorhanden
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private as: AuthService, private router: Router) {}

  async login() {
    try {
      // Login versuchen
      let resp: any = await this.as.loginWithUserAndPassword(this.username, this.password);

      // Token aus der Antwort extrahieren und speichern
      let token = resp.token;
      localStorage.setItem('token', token);

      console.log(resp);
      this.router.navigateByUrl('/todos');
    } catch (e) {
      // Fehler beim Login behandeln
      alert('Login abgelehnt');
      console.error(e);
    }
  }
}
