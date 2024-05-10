import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private ApiUrl="http://localhost:3000/todos"
  constructor(private httpclient:HttpClient) { }


  //get all
  GetTodos():Observable<Todo[]>{
  return  this.httpclient.get<Todo[]>(this.ApiUrl);
  }

  //create to do
  CreateTodo(item:Todo):Observable<Todo>{
return this.httpclient.post<Todo>(this.ApiUrl,item)
  }

  //get todo by id
  Getbyid(id:string):Observable<Todo>{
return this.httpclient.get<Todo>(`${this.ApiUrl}/${id}`)
  }


  //update to do
  Updatetodo(item:Todo):Observable<Todo>{
    return this.httpclient.put<Todo>(`${this.ApiUrl}/${item.id}`,item)
  }

  // delete todo
  Deletetodo(todoid:string):Observable<void>{
return this.httpclient.delete<void>(`${this.ApiUrl}/${todoid}`)
  }
}
