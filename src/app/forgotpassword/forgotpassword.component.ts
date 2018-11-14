import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  public myId="testid";
  public name="";
  
  constructor() { }

  ngOnInit() {
  }

  logmsg(value)
  {
   
    this.name=value;
    console.log("Name is : "+this.name);
  }

  

}
