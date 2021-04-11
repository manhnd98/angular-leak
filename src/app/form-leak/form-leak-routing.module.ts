import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormLeakComponent } from './form-leak.component';

const routes: Routes = [{ path: '', component: FormLeakComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormLeakRoutingModule { }
