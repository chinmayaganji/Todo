import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
  todos = [];
  ngOnInit(): void {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } else {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  }
}
