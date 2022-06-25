import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.scss']
})
export class BraceletComponent implements OnInit {
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
