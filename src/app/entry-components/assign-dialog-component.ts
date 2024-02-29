import {Component, Inject} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'assign-dialog',
  templateUrl: './assign-dialog-component.html',
  styleUrl: './assign-dialog-component.css'
})
export class DialogAssign {
  constructor(private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<DialogAssign>){
    console.log("data", this.data);
  }
  public Roles: any = ['Channel Partner', 'Dealer', 'Sub Dealer'];
  public partnerDetails:any = ['Partner A', 'Partner B', 'Partner C', 'Partner D'];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;

  handleAssign(){

  }
}
