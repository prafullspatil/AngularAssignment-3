import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './include/footer/footer.component';
import { HeaderComponent } from './include/header/header.component';
import { EarringComponent } from './component/earring/earring.component';
import { RingComponent } from './component/ring/ring.component';
import { NecklaceComponent } from './component/necklace/necklace.component';
import { BraceletComponent } from './component/bracelet/bracelet.component';
import { CartComponent } from './component/cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';



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
    WishlistComponent,
    ProductDetailsComponent
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
