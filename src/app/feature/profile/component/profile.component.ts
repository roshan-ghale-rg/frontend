import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/model/User';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private pService: ProfileService, public router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  save() {

    this.pService.update(this.user).subscribe(res => {
      localStorage.setItem('currentUser', JSON.stringify(res));
      this.router.navigate(['/home/inventory/home']);
      this.toastr.success('Updated Successfully', 'Profile !');
    },
      err => {
        this.router.navigate(['/login']);
        this.toastr.warning('Update Failure', 'Profile !');
      }
    );
  }

}
