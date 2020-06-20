import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpclient: HttpClient) { }
  baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  getTodos() {
    return this.httpclient.get(this.baseUrl);
  }

  // addTodo(todo) {
  //   const data = this.httpclient.post(this.baseUrl, JSON.stringify(todo));
  //   console.log(data);
  //   return data;
  //  }

   addTodo(todo): Observable<any> {
    return this.httpclient.post(this.baseUrl, todo);
  }

  updateTodo(todo) {
    const url = `${this.baseUrl}/`;
    return this.httpclient.patch(url + todo.id, JSON.stringify({completed: true}));
  }

  deleteTodo(id: number) {
    const url = `${this.baseUrl}/${id}`; // DELETE api/heroes/42
    return this.httpclient.delete(url);
  }

}
