import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeseosService {
  private userDetails:any = {};
  public userRole = '';
  constructor() { }

  public getUserDetails(){
    return this.userDetails;
  }

  public setUserDetails(user:any){
    this.userDetails = user;
  }

  public setKeyValueInLocal(key:any, val:any){
    val = JSON.parse(val);
    let updatedKey:any = this.getValueByKeyFromLocal(key);
    if(updatedKey){
      updatedKey = [...updatedKey, ...[val]];
    }else{
      val = [val];
    }
    val = JSON.stringify(val);
    localStorage.setItem(key, val);
  }
  public getValueByKeyFromLocal(key:any){
    return localStorage.getItem(key);
  }
}
