import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../AccountService/account.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  constructor (private route:Router,private service:AccountService) {}
  user:any | null = null;;
  ELEMENT_DATA = [
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,checked_in_person_name:"James",warranty_duration:"2 years",amount:20000,status:"In Shop"},
    {product: "Samsung M33",supplier:"Rashid",imei:1325463463,checked_in_person_name:"James",warranty_duration:"2 years",amount:20000,status:"In Shop"}
  ];
  displayedColumns: string[] = ['product', 'supplier', 'imei', 'checked_in_person_name','warranty_duration','amount','status'];
  printProduct(product:any){
    console.log(product)
  }
  ngOnInit(): void {
    this.service.getProfile().subscribe((res:any)=>{
      this.user = res['user']
    })
  }

}
