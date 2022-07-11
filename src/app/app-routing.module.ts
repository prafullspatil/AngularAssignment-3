import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletComponent } from './components/bracelet/bracelet.component';
import { CartComponent } from './components/cart/cart.component';
import { EarringComponent } from './components/earring/earring.component';
import { NecklaceComponent } from './components/necklace/necklace.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RingComponent } from './components/ring/ring.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'home', component:DashboardComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
  
  {path:'earring', component:EarringComponent },
  {path:'ring', component:RingComponent },
  {path:'bracelet', component:BraceletComponent },
  {path:'necklace', component:NecklaceComponent },
  {path:'cart', component:CartComponent},
  {path:'wishList', component:WishlistComponent},
  {path:'details/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
