import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Sales/dashboard/dashboard.component';
import { SaleComponent } from './Sales/sale/sale.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Sale',component:DashboardComponent},
  {path:'Single_Sale', component:SaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
