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
    {name: "Register Channel Partners", id: 1, path: "register", admin: true, icon:"account_box"},
    {name: "View Channel Partners", id: 2, path: "viewChannelPartner", admin: true, icon: "pageview"},
    {name: "View/Assign Leads", id: 3, path: "assignLeads", admin: false, icon: "assignment_turned_in"},
    {name: "Add New Leads", id: 4, path: "addNewLeads", admin: false, icon: "playlist_add"},
   // {name: "Add New Partner", id: 5, path: "addNewCustomer", admin: true, icon: "add_location"},
    {name: "Training Videos", id: 6, path: "", admin: false, icon: "video_library"},
    {name: "Price List", id: 7, path: "", admin: true, icon: "monetization_on"},
    {name: "Heseos", id: 0, path: "www.heseos.com" , admin: false, icon: "exit_to_app"}
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
    }else{
      this.service.userRole = "";
      this.service.setUserDetails({});
      window.location.href = pageDetails.path;
    }
  }
}
