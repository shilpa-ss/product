import { ProductService } from './../../product.service';
import { product } from './../../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

productsdet:product[];

productbyId:product;

id:string;
  constructor(private Service:ProductService,private route:ActivatedRoute) {
   this.id= this.route.snapshot.params.pid;
   }

  ngOnInit(): void {
    this.productsdet=this.Service.getProducts();
    this.getId();
  }

  getId()
  {
    for(let product of this.productsdet)
    {
      if(product.id.toString()==this.id)
      {
        this.productbyId=product;
      }
    }
  }

}
