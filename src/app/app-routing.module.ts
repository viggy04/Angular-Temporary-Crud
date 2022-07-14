import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudBasicComponent } from './components/crud-basic/crud-basic.component';

const routes: Routes = [
  {path:'crud',component:CrudBasicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
