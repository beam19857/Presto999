import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoniterComponent } from './moniter/moniter.component';
//import { MoniterComponent } from './moniter/moniter.component';


const routes: Routes = [
  {path:'moniter',component:MoniterComponent}

];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
