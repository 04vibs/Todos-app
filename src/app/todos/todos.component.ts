import { Component, OnInit } from '@angular/core';
// import {TODOS} from '../todos';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  // todosPreDefined = TODOS;
  todosPreDefined: any ;
  selectedTodo;

  ngOnInit(): void {
    this.getTodo();
  }

  onSelect(todo) {
    console.log(todo);
    this.selectedTodo = todo;
  }

  getTodo() {
    this.todoService.getTodos().subscribe((response) => {
      console.log(response);
      this.todosPreDefined = response;
    });
  }

  addTodo(input: HTMLInputElement) {
    const todo: any = {title: input.value};
    const newtodo = JSON.stringify(todo);
    this.todoService.addTodo(newtodo)
    .subscribe((data) => {
      console.log(data);
      todo.id = data.id;
      this.todosPreDefined.splice(0, 0, todo);
    //  this.todosPreDefined.push(data);
    });
  }

  updateTodo(todo) {
    console.log(todo);
    this.todoService.updateTodo(todo).subscribe((response) => {
       console.log(response);
    });
  }


  deleteTodo(todo) {
    console.log(todo.id);
    this.todoService.deleteTodo(todo.id).subscribe((response) => {
      const index = this.todosPreDefined.indexOf(todo);
      console.log(index);
      this.todosPreDefined.splice(index, 1);
    });
  }

}
