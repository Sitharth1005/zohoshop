import { SignupComponent } from 'src/app/components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { JewellaryComponent } from './components/jewellary/jewellary.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {path:'products',component:ProductsComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'cart',component:CartComponent},
  {path:'fashion',component:FashionComponent},
  {path:'jewellary',component:JewellaryComponent},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'signup',component:SignupComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
