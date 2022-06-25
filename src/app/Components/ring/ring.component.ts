import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.scss']
})
export class RingComponent implements OnInit {
  productData: any = [];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllProduct().subscribe((res) => {
      console.log(res);
      this.productData = res;
      // this.filterCategory = res;
    });
  }

}
