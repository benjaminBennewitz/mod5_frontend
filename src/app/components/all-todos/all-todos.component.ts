import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-todos.component.html',
  styleUrl: './all-todos.component.scss'
})
export class AllTodosComponent {
  todos:any = [];
  error:string = '';

  constructor(private http: HttpClient){}

  async ngOnInit(){
    try{
      this.todos = await this.loadTodos();
      console.log(this.todos);
    }catch (e){
      this.error = 'Loading failed - please log in!';
      console.log(e);
    }
  }

  loadTodos(){
    const url = environment.baseUrl + '/todos/';    
    return lastValueFrom(this.http.get(url));
  }
}
