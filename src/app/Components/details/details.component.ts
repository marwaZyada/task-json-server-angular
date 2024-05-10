import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../Services/todo.service';
import { Todo } from '../../Models/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  id!:string

todo:Todo={} as Todo
constructor(private _route:ActivatedRoute,private _service:TodoService,private _navigate:Router){
  _route.paramMap.subscribe(e=>{
  this.id= e.get('id')||""
  console.log(this.id)
  })

  this.GetById(this.id)
}

// Get specific item
GetById(id:string){
this._service.Getbyid(id).subscribe(e=>{
  this.todo=e
  console.log(this.todo);
  
})
}


 //update item
 Update(item:Todo){
  this._service.Updatetodo(item).subscribe(e=>{
    this._navigate.navigate(["/home"])
  })
}
}
