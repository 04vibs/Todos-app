import { Component, OnInit } from '@angular/core';
import {TODOS} from '../todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  todosPreDefined = TODOS;
  selectedTodo;

  ngOnInit(): void {
  }

  onSelect(todo) {
    console.log(todo);
    this.selectedTodo = todo;
  }


}
