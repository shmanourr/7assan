import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product: any = {};
  constructor( private catgSrv : CategoriesService , 
    private activaRoute : ActivatedRoute ,
    private router : Router,
    private ProdSrv : ProductsService) {
    this.categories$ = catgSrv.getCategories();
     let id = this.activaRoute.snapshot.paramMap.get('id');
    if (id) {
      this.ProdSrv.getByID(id).take(1).subscribe(p =>{
        if (p) {
          this.product=p;
          console.log(p);

        }
          
     
      }) ;
        
    
    } 
    
   } 

  ngOnInit(): void {
  }

  save(product){
    this.ProdSrv.create(product);
    this.router.navigateByUrl('admin/products');
  }
}
