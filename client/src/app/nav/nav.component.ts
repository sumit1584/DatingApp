import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={};

constructor(public accountservice:AccountService) { }

  ngOnInit(): void {
    
  }
  login(){
    this.accountservice.login(this.model).subscribe(resp => {
      console.log(resp);      
    },err => {
      console.log(err);
    });
  }

  logout(){
    this.accountservice.logout();    
  }

 
}
