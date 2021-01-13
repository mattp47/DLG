import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accordion',
    pathMatch: 'full'
  },
  {
    path: 'accordion',
    loadChildren: () => import('./components/accordion/accordion.module').then(m => m.AccordionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
