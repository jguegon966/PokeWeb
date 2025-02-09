import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TODO_DATA } from '../assets/todo';
import { TodoComponent } from './pages/todo/todo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    TodoComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PokeWeb 0.1';
  todoData1 = TODO_DATA[0];
  todoData2 = TODO_DATA[1];
}
