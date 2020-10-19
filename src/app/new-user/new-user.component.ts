import { Component } from '@angular/core';


@Component({
	selector: 'new-user',
	template: `
		<clear-form-on-init-and-alert-on-destroy-container>
			<header><h2>{{heading}}</h2></header>
			<new-user-form></new-user-form>
		</clear-form-on-init-and-alert-on-destroy-container>
	`
})
export class NewUserComponent {

	heading = 'Create Account';

}
