import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string="http://localhost:8080/cart/"

  constructor(
    private http:HttpClient
  ) { }

  getProducts(){
    return this.http.get<any>(this.url+"products").pipe(map((res:any)=>{
      return res;
    })
    );
  }
  addtoCart(pid:any){
    return this.http.put<any>(this.url+"add/" + pid,null).pipe(map((res:any)=>{
      return res;
    })
    );

  }
  removeFromCart(pid:any){
    return this.http.put<any>(this.url+"remove/" + pid,null).pipe(map((res:any)=>{
      return res;
    })
    );

  }
  getCartProducts(){
    return this.http.get<any>(this.url).pipe(map((res:any)=>{
      return res;
    })
    );

  }
}
