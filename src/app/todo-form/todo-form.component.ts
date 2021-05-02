import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = '';
  date = '';
  check = true;
  todos;
  today= new Date();
  dateString:string
  dateFun(){

   var dd = this.today.getDate();
   var d:string;
   var m:string;
   var mm = this.today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
   var yyyy = this.today.getFullYear();
   if (dd < 10) {
     d = '0' + dd;
   }
   if (mm < 10) {
     m = '0' + mm;
   } 
   this.dateString = yyyy + '-' + m + '-' + d;
   console.log(this.dateString);
   
  }
  

  Create() {
    this.todos = JSON.parse(localStorage.getItem('todos'));
    this.todos.push({
      id: this.todos.length + 1,
      name: this.name,
      //date: new Date(this.date),
      date: this.date,
      status: false,
    });
    this.todos.forEach((todo) => {
      if (todo.date != null) {
        todo.date = new Date(todo.date);
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.name=""
    this.date=""
  }
}
