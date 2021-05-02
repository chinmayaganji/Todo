import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor() {}
  @Input() todos;

  ngOnInit(): void {
    this.todos = JSON.parse(localStorage.getItem('todos'));
    this.todos.forEach((todo) => {
      if (todo.date != null) {
        todo.date = new Date(todo.date);
      }
    });
  }
  ngOnChanges() {
    //console.log("changs called");

    this.todos = JSON.parse(localStorage.getItem('todos'));

    this.todos.forEach((todo) => {
      if (todo.date != null) {
        todo.date = new Date(todo.date);
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onComplete(id) {
    console.log('complete called');

    this.todos.forEach((todo) => {
      if (todo.id == id) {
        console.log(todo.id, todo.status);
        todo.status = !todo.status;
        console.log(todo.id, todo.status);
      }
    });
    this.todos.forEach((todo) => {
      if (todo.date != null) {
        todo.date = new Date(todo.date);
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  onRemove(id) {
    this.todos = this.todos.filter((todo)=>todo.id!=id)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
