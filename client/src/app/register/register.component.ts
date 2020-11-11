import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
model:any = {};
validationErrors:string[] = [];
  constructor(private accountService:AccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(resp => {
      console.log(resp);
      this.cancel()
    },err => {
      this.validationErrors = err;
      //this.toastr.error(err.error);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
