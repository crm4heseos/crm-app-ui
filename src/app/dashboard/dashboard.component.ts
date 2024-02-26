import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeseosService } from '../heseos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  public dashboard = [
    {name: "Register Channel Partners", id: 1, path: "register", admin: true},
    {name: "View Channel Partners", id: 2, path: "viewChannelPartner", admin: true},
    {name: "View/Assign Leads", id: 3, path: "assignLeads", admin: false},
    {name: "Add New Leads", id: 4, path: "addNewLeads", admin: false},
    {name: "Add New Customer", id: 5, path: "addNewCustomer", admin: true},
    {name: "Heseos", id: 0, path: "www.heseos.com" , admin: false}
  ];
  constructor(private router: Router, public service: HeseosService){}

  ngOnInit(){
    if(this.service.userRole !== 'admin'){
      this.dashboard = this.dashboard.filter(notAdminData => !notAdminData.admin);
    }
  }

  redirectToPage(pageDetails:any){
    if(pageDetails.id){
      this.router.navigate([`/${pageDetails.path}`]);
    }
  }
}
