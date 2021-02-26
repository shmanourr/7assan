import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  products$;
  constructor( private prodSrv : ProductsService) {
    this.products$ = this.prodSrv.get();
   }

  ngOnInit(): void {
  }

}
