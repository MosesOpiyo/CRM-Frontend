import { Router } from '@angular/router';
import { AccountService } from 'src/app/AccountService/account.service';
import { Component,OnInit } from '@angular/core';
import { StatsService } from 'src/app/Stats/stats.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {
  constructor (private route:Router,private service:AccountService,private stats:StatsService) {}
  user:any | null = null;;
  totalSales:any
  soldUnits:any
  sales:any
  atShop:any
  clients:any
  initial = 0;
  ELEMENT_DATA = [
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,delivered_by:"James",client_name:"Moses",status:"In Shop",mode_of_payment:"Mpesa",date:"5/11/2023"},
  ];
  displayedColumns: string[] = ['product', 'supplier', 'imei', 'delivered_by','client_name','client_phone_number','status','warranty_duration'];
  printProduct(product:any){
    console.log(product)
  }
  Navigate(){
    this.route.navigate(['Single_Sale'])
  }
  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    }),
    this.stats.getSalesValue().subscribe((res:any)=>{
      
      this.sales = res
      console.log(this.sales)
      for(let i = 0; i < res.length; i++){
        this.initial += res[i]['stock']['amount'];
        this.totalSales = this.initial
        this.soldUnits = res.length
      }
    }),
    this.stats.getAllAtShop().subscribe((res:any)=>{
      this.atShop = res.length
    }),
    this.stats.getAllClients().subscribe((res:any)=>{
      this.clients = res.length
    })

  }
  
}
