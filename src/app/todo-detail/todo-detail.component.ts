import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  constructor() { }
  @Input() selectedTodo: any;

  ngOnInit(): void {
  }

}
