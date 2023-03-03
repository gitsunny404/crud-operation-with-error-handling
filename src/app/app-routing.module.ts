import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { JobcheckReactiveFormComponent } from './jobcheck-reactive-form/jobcheck-reactive-form.component';
import { ModalDataShareComponent } from './modal-data-share/modal-data-share.component';

const routes: Routes = [
  //{ path : '', component : JobcheckReactiveFormComponent },
  { path : 'first', component : JobcheckReactiveFormComponent },
  { path : 'second', component : FirstComponent },
  { path : '', component : ModalDataShareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
