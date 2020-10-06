import { ProductService } from './../../product.service';
import { product } from './../../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

products:product[];
  constructor(private Service:ProductService) { }

  ngOnInit(): void {
    this.products=this.Service.getProducts();
  }

}
