import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/registration/model/user';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public router: Router,private sharedService:SharedService) { }
  user:User;

  ngOnInit() {
   
  }

  getUser(){
    return JSON.parse(this.sharedService.getUser());
  }

  @Output() navToggle=new EventEmitter<boolean>();
  navOpen(){
    this.navToggle.emit(true);
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
