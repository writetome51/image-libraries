import { Component } from '@angular/core';
import { CurrentUserService } from '../services/user/current-user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	changingPassword = true;


	constructor(public currentUser: CurrentUserService, public router: ActivatedRoute) {
		console.log(this.router.snapshot.params);
	}


	save() {
	}


}
