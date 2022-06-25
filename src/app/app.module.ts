import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './include/footer/footer.component';
import { HeaderComponent } from './include/header/header.component';
import { EarringComponent } from './Components/earring/earring.component';
import { RingComponent } from './Components/ring/ring.component';
import { NecklaceComponent } from './Components/necklace/necklace.component';
import { BraceletComponent } from './Components/bracelet/bracelet.component';
import { CartComponent } from './Components/cart/cart.component';
import { FilterPipe } from './Shared/filter.pipe';
import { WishlistComponent } from './Components/wishlist/wishlist.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    EarringComponent,
    RingComponent,
    NecklaceComponent,
    BraceletComponent,
    CartComponent,
    FilterPipe,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
