import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../Services/todo.service';
import { Todo } from '../../Models/todo';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule,FormsModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  trash = faTrash;
  plus=faPlus
  check=faCircleCheck
  nocheck=faCircleXmark
  todos:Todo[]=[]
  todo:Todo ={} as Todo
  val!:string
constructor(private todoservice:TodoService){

}
  ngOnInit(): void {
  this.GetItems()
  }

//get items
GetItems(){
  this.todoservice.GetTodos().subscribe(res=>{
    console.log(res)
  this.todos=res
   })
}
  //add item
  Add(){
    console.log(this.todo.title);
    
    const item={id:this.todo.id,title:this.todo.title,completed:false}
    this.todo=item

    this.todoservice.CreateTodo(this.todo).subscribe(res=>{
// this.todos.push(res)
this.GetItems()
    })
  }

  //delete item
  Del(id:string){
    this.todoservice.Deletetodo(id).subscribe(e=>{
this.todos=this.todos.filter(e=>e.id!=id)
    })
  }

 
}
