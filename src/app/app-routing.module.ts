import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictorComponent } from './predictor/predictor.component';

const routes: Routes = [
  {
    path: '',
    component: PredictorComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
