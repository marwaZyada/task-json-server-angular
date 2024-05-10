import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { TodosComponent } from './Components/todos/todos.component';
import { DetailsComponent } from './Components/details/details.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent,title:"Home"},
    {path:"contact",component:ContactusComponent},
    {path:"todos",component:TodosComponent},
    {path:"todos/:id",component:DetailsComponent},
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"**",component:NotfoundComponent}
];
