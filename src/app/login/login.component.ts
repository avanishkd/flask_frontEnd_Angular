
import  {  Component,  OnInit  }  from  '@angular/core';
import  {  FormBuilder,  FormGroup,  Validators  }  from  '@angular/forms';
import  { HttpClientModule }  from  '@angular/common/http';
import  { HttpClient }  from  '@angular/common/http';
import  {  LoginServiceService  }  from  "src/app/services1/login-service.service";
import  { MatDialog,  MatDialogRef }  from  '@angular/material/dialog';
import  {  ToastrService  }  from  'ngx-toastr';
import  {  Router  }  from  "@angular/router";
import { ShowLogoutService } from "src/app/services1/show-logout.service"


@Component({
  selector:  'app-login',
  templateUrl:  './login.component.html',
  styleUrls:  ['./login.component.css']
})
export  class  LoginComponent  implements  OnInit  {
  registerForm:  FormGroup;
  submitted  =  false;
  private  loadloggedin =  false;
  private loadWishlist = false;
  
  constructor(
    public  dialogRef:  MatDialogRef<LoginComponent>,
    private  formBuilder:  FormBuilder,
    private  loginServiceService:  LoginServiceService,
    private  toastr:  ToastrService,
    private  router:  Router,
    private wish: ShowLogoutService
    
  ) { }

  showSuccess() {
    this.loadWishlist = this.wish.loadMywishlist();
    this.dialogRef.close();
    this.toastr.success('Have fun',  'Logged In!');
   // this.router.navigateByUrl('buyerland');
   // this.wish.loadMywishlist();
  }

  showFail() {
    this.toastr.error('Not Registered!');
  }

  showApiFail() {
    this.toastr.error('Not Running', 'Back End Error');
  }

  onClickclose() {
    this.dialogRef.close();
    this.router.navigateByUrl('main');
  }


  ngOnInit() {
    this.registerForm  =  this.formBuilder.group({
      email:  ['', [Validators.required,  Validators.email]],
      password:  ['', [Validators.required,  Validators.minLength(8)]],

    });
  }

  // convenience getter for easy access to form fields
  get  f() {  return  this.registerForm.controls; }
  getposts(eml, pass) {

    
    this.loadloggedin  =  true;
    this.loginServiceService.getposts(eml, pass)
      .subscribe(res  =>  {
        console.log(res);
        if (res == "Logged In As Buyer") {
          this.showSuccess();
          this.router.navigateByUrl('buyerland');
          

        }
        else if (res == "Logged In As Seller"){
          this.showSuccess();
          this.router.navigateByUrl('sellerland');
        }
        else {

          this.toastr.error(res.toString());


        }
      }, (err) => {
        console.log("err.status")
        console.log(err.status)
        this.showApiFail();
      })
  }

  onSubmit() {
    this.submitted  =  true;

    // stop here if form is invalid
    if  (this.registerForm.invalid) {
      return;
    }

  }
  email1: string;
  password1: string;
}

