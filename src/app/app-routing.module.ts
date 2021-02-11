import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './features/home/home.component';
import { NewComponent } from './features/new/new.component';
import { UserComponent } from './shared/user/user.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'new',
  component: NewComponent,
},
{
  path: 'contact/:user',
  loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule),
  canActivate: [AuthGuard],
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
