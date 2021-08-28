import { RxjsComponent } from './rxjs/rxjs.component';
import { PromesaComponent } from './promesas/promesa/promesa.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



  const routes: Routes = [
    {
      path      : 'dashboard',
      component : PagesComponent,
      children  : [
        { path: '', component: DashboardComponent, data: { titulo: 'Dashboard'}},
        { path: 'progress', component: ProgressComponent , data: { titulo: 'Progress'}},
        { path: 'grafica1', component: Grafica1Component , data: { titulo: 'Grafica #1'}},
        { path: 'setting', component: AccountSettingComponent , data: { titulo: 'Setting'}},
        { path: 'promesas', component: PromesaComponent , data: { titulo: 'Promesas'}},
        { path: 'rxjs', component: RxjsComponent , data: { titulo: 'Rxjs'}},
        { path: '', redirectTo: 'dashboard', pathMatch:'full' }
      ]
    },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
