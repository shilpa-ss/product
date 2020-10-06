import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  title:string="List of Products";
  getTitle(){
    return this.title;
  }


  products=["Mobile","Laptop","Sofa","Pen","Pencil"];
  imgsrc="/assets/Images/image2.jpg";
  imgOnline="https://wallpapercave.com/wp/wp2659541.jpg";
  isDisabled=false;
  isActive=false;
  newProduct="laptop";

  constructor() { }

  ngOnInit(): void {
  }

  onbutton()
  {
    this.products.push(this.newProduct);
  }
  onKeyUp()
  {
    // console.log(event);
    // console.log("Text box key pressed");
    console.log(this.newProduct);
  }
  divClick()
  {
    console.log("div Clicked");
  }
  onclickhere(event)
  {
    event.stopPropagation();
    console.log("Click Here Clicked");
  }

  divParent()
  {
    console.log("div Parent Clicked");
  }


}
