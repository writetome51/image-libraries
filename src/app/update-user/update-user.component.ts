import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateUserEmailFormComponent } from './update-user-email-form/update-user-email-form.component';
import { UpdateUserPasswordFormComponent }
	from './update-user-password-form/update-user-password-form.component';
import { DeleteUserFormComponent } from './delete-user-form/delete-user-form.component';


@Component({
	selector: 'update-user',
	templateUrl: './update-user.component.html'
})
export class UpdateUserComponent {

	heading = 'Update Account';

	private __nestedComponents = [
		UpdateUserEmailFormComponent,
		UpdateUserPasswordFormComponent,
		DeleteUserFormComponent
	];


	get formHeading() {
		let url = this.__router.routerState.snapshot.url;

		for (let i = 0; i < this.__nestedComponents.length; ++i) {
			let nestedComponent = this.__nestedComponents[i];

			if (url.endsWith(`/${nestedComponent.path}`)) {
				return nestedComponent.heading;
			}
		}
	}


	constructor(private __router: Router) {
	}

}
