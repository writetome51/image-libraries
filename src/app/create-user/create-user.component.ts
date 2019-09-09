import { Component } from '@angular/core';
import { CurrentUserService } from '../services/current-user.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html',
	styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent {

	constructor(public currentUser: CurrentUserService) {
	}


	create() {

	}

}
