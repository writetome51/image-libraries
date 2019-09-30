import { Component } from '@angular/core';
import { CurrentUserService } from '../services/user/current-user.service';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	constructor(public currentUser: CurrentUserService) {
	}


	save() {
	}


}
