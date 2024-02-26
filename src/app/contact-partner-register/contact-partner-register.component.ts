import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeseosService } from '../heseos.service';

@Component({
  selector: 'app-contact-partner-register',
  templateUrl: './contact-partner-register.component.html',
  styleUrl: './contact-partner-register.component.css'
})
export class ContactPartnerRegisterComponent {
  @Input() heading = "Register";
  @Input() partner = true;
  public userDetailsForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    userRole: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    country: new FormControl(''),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required])
  });
  public Roles: any = ['Channel Partner', 'Dealer', 'Sub Dealer'];
  public stateList: any = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];
  public cityList:any = [];
  constructor(private service: HeseosService){
    const userDetails = this.service.getUserDetails();
    if(userDetails && userDetails.name === 'Admin'){
      this.Roles.push('Admin');
    }
  }

  handleRegisterForm(){
    //console.log(this.userDetailsForm);
    if(this.userDetailsForm.valid){
      this.service.setKeyValueInLocal('users', JSON.stringify(this.userDetailsForm.value));
      this.userDetailsForm.reset();
    }
  }
}
