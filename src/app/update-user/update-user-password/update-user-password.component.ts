import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';


@Component({
	selector: 'update-user-password',
	templateUrl: './update-user-password.component.html'
})
export class UpdateUserPasswordComponent implements OnInit {

	newPasswordAgain = '';


	constructor(public currentUser: CurrentUserService) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


}
