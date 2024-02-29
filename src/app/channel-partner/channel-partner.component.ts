import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAssign } from '../entry-components/assign-dialog-component';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
const PartnerData: any = [
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
const LeadData: any = [
  {position: 1, name: 'Lead A', city: "Bangalore",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""},
  {position: 2, name: 'Lead B', city: "Pune",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""},
  {position: 3, name: 'Lead C', city: "Hyderabad",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""},
  {position: 4, name: 'Lead D', city: "Mumbai",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""},
  {position: 5, name: 'Lead E', city: "Bangalore",phoneNumber: "1234567890", details: 'to be decided....', assigned: "Partner A"},
  {position: 6, name: 'Lead F', city: "Delhi",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""},
  {position: 7, name: 'Lead G', city: "Raipur",phoneNumber: "1234567890", details: 'to be decided....', assigned: "Partner B"},
  {position: 8, name: 'Lead H', city: "Gujrat",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""},
  {position: 9, name: 'Lead I', city: "Pune",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""},
  {position: 10, name: 'Lead J', city: "Mumbai",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""},
  {position: 11, name: 'Lead K', city: "Gujrat",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""},
  {position: 12, name: 'Lead L', city: "Pune",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""},
  {position: 13, name: 'Lead M', city: "Mumbai",phoneNumber: "1234567890", details: 'to be decided....', assigned: ""}
];
@Component({
  selector: 'app-channel-partner',
  templateUrl: './channel-partner.component.html',
  styleUrl: './channel-partner.component.css'
})
export class ChannelPartnerComponent implements OnInit, AfterViewInit{
  @ViewChild(MatSort)
  sort!: MatSort;
  @Input() public heading: string = "Channel Partner Details";
  @Input() public isLeadAssign:boolean = false;
  displayedColumns: string[] = ['position', 'name','phoneNumber', 'city', 'details'];
  //dataSource = PartnerData;
  dataSource = new MatTableDataSource(PartnerData);
  constructor(public dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer){

  }

  ngOnInit(){
    if(this.isLeadAssign){
      this.displayedColumns.push('assigned');
      this.displayedColumns.push('action');
      this.dataSource = new MatTableDataSource(LeadData);
    }
  }

  handleAssign(dataObj :any){
    const dialogRef = this.dialog.open(DialogAssign,{
      width: '800px',
      data: dataObj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
