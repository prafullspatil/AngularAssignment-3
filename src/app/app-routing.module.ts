import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletComponent } from './Components/bracelet/bracelet.component';
import { CartComponent } from './Components/cart/cart.component';
import { EarringComponent } from './Components/earring/earring.component';
import { NecklaceComponent } from './Components/necklace/necklace.component';
import { RingComponent } from './Components/ring/ring.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'home', component:DashboardComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
  
  {path:'earring', component:EarringComponent },
  {path:'ring', component:RingComponent },
  {path:'bracelet', component:BraceletComponent },
  {path:'necklace', component:NecklaceComponent },
  {path:'cart', component:CartComponent},
  {path:'wishList', component:WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
