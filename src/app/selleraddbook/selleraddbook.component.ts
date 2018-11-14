import { Component, OnInit } from '@angular/core';
import { SelleraddserviceService } from "src/app/services1/selleraddservice.service";
import  {  ToastrService  }  from  'ngx-toastr';
@Component({
  selector: 'app-selleraddbook',
  templateUrl: './selleraddbook.component.html',
  styleUrls: ['./selleraddbook.component.css']
})
export class SelleraddbookComponent implements OnInit {

  constructor(private sellerAddservice:SelleraddserviceService,
    private  toastr:  ToastrService) { }

  ngOnInit() {
  }
  getbooks(eml,book,prc) {
    
       
        this.sellerAddservice.getbooks(eml,book,prc)
          .subscribe(res  =>  {
            console.log(res);
            this.toastr.success(res.toString());
          })
      }

}
