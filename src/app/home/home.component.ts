import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any = [];
  added: boolean = false;
  constructor(
    private service: ProductService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getProducts();


  }

  getProducts() {
    this.products = [];
    this.service.getProducts().subscribe((res) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        this.products.push(res[i])
      }
      // this.products=res;
    });
    console.log(this.products);
  }
  addtoCart(pid) {
    this.service.addtoCart(pid).subscribe((res) => {
      this.ngOnInit();
      alert(res.message)




    }, err => {
      alert(err.message);
    });



  }
  // removeFromCart(pid){
  //   this.service.removeFromCart(pid).subscribe((res)=>{
  //     alert(res.message);

  //   },err=>{
  //     alert(err.message);
  //   });
  //   this.ngOnInit();
  // }

}
