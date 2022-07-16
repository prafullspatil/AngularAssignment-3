import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletComponent } from './component/bracelet/bracelet.component';
import { CartComponent } from './component/cart/cart.component';
import { EarringComponent } from './component/earring/earring.component';
import { NecklaceComponent } from './component/necklace/necklace.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { RingComponent } from './component/ring/ring.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
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
