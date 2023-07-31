import { Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent {
  constructor (private route:Router) {}
  ELEMENT_DATA = [
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
  ];
  displayedColumns: string[] = ['product', 'supplier', 'imei', 'delivered_by','client_name','status','mode_of_payment','date'];
  printProduct(product:any){
    console.log(product)
  }
  Navigate(){
    this.route.navigate(['Single_Sale'])
  }
  
}
