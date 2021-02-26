import { ProductsService } from './services/products.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

const routes: Routes = [
  {path : 'products' , component : ProductsComponent , canActivate : [AuthGuard]},
  {path : 'orders' , component : MyOrdersComponent , canActivate : [AuthGuard]},
  {path : 'admin/orders' , component : AdminOrderComponent , canActivate : [AuthGuard,AdminAuthGuardService ]},
  {path : 'admin/products' , component : AdminProductComponent , canActivate : [AuthGuard ,AdminAuthGuardService ]},
  {path : 'admin/products/:id' , component : ProductFormComponent , canActivate : [AuthGuard ,AdminAuthGuardService ]},
  {path : 'admin/products/new' , component : ProductFormComponent , canActivate : [AuthGuard ,AdminAuthGuardService ]},
  {path : 'shopping-cart' , component : ShoppingCartComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'check-out' , component : CheckOutComponent , canActivate : [AuthGuard]},
  {path : 'order-success' , component : OrderSuccessComponent , canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
