import { Component, Input, OnInit } from '@angular/core';
const ELEMENT_DATA: any = [
  {position: 1, name: 'Partner A', city: "Bangalore",phoneNumber: "1234567890", details: 'to be decided....'},
  {position: 2, name: 'Partner A', city: "Pune",phoneNumber: "1234567890", details: 'to be decided....'},
  {position: 3, name: 'Partner A', city: "Hyderabad",phoneNumber: "1234567890", details: 'to be decided....'},
  {position: 4, name: 'Partner A', city: "Mumbai",phoneNumber: "1234567890", details: 'to be decided....'},
  {position: 5, name: 'Partner A', city: "Bangalore",phoneNumber: "1234567890", details: 'to be decided....'},
  {position: 6, name: 'Partner A', city: "Delhi",phoneNumber: "1234567890", details: 'to be decided....'},
  {position: 7, name: 'Partner A', city: "Raipur",phoneNumber: "1234567890", details: 'to be decided....'},
  {position: 8, name: 'Partner A', city: "Gujrat",phoneNumber: "1234567890", details: 'to be decided....'},
  {position: 9, name: 'Partner A', city: "Pune",phoneNumber: "1234567890", details: 'to be decided....'},
  {position: 10, name: 'Partner A', city: "Mumbai",phoneNumber: "1234567890", details: 'to be decided....'},
];
@Component({
  selector: 'app-channel-partner',
  templateUrl: './channel-partner.component.html',
  styleUrl: './channel-partner.component.css'
})
export class ChannelPartnerComponent implements OnInit{
  @Input() public heading: string = "Channel Partner Details";
  @Input() public isLeadAssign:boolean = false;
  displayedColumns: string[] = ['position', 'name','phoneNumber', 'city', 'details'];
  dataSource = ELEMENT_DATA;

  constructor(){

  }

  ngOnInit(){
    if(this.isLeadAssign){
      this.displayedColumns.push('action');
    }
  }

  handleAssign(){

  }
}
