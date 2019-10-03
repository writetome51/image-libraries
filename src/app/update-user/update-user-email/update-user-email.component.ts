import { Component } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';


@Component({
	selector: 'update-user-email',
	templateUrl: './update-user-email.component.html'
})
export class UpdateUserEmailComponent {

	newEmailAgain = '';

	constructor(public currentUser: CurrentUserService) {
		this.currentUser.email = '';
	}


}
