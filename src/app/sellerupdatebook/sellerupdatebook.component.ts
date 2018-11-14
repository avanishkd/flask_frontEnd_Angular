import { Component, OnInit } from '@angular/core';
import { SellerupdatebookServicesService } from "src/app/services1/sellerupdatebook-services.service";
import  {  ToastrService  }  from  'ngx-toastr';

@Component({
  selector: 'app-sellerupdatebook',
  templateUrl: './sellerupdatebook.component.html',
  styleUrls: ['./sellerupdatebook.component.css']
})
export class SellerupdatebookComponent implements OnInit {

  constructor(private sellerupdate:SellerupdatebookServicesService,
    private  toastr:  ToastrService) { }

  ngOnInit() {
  }
  updatebooks(eml,book,prc) {
    
       
        this.sellerupdate.updatebooks(eml, book,prc)
          .subscribe(res  =>  {
            console.log(res);
            this.toastr.success(res.toString());
          })
      }
}
