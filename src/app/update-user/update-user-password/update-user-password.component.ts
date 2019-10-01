import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';

@Component({
  selector: 'update-user-password',
  templateUrl: './update-user-password.component.html'
})
export class UpdateUserPasswordComponent implements OnInit {

  constructor(public currentUser: CurrentUserService) { }

  ngOnInit() {
  }

}
