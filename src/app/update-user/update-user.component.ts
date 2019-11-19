import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	heading = 'Update Account';


	get formHeading() {
		let r = this.__router.routerState.snapshot.url;
		if (r.includes('email')) return 'Update Email';
		if (r.includes('password')) return 'Update Password';
		if (r.includes('delete')) return 'Self Destruct?';
	}


	constructor(private __router: Router) {
	}

}
