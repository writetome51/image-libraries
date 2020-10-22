import { Component } from '@angular/core';


@Component({
	selector: 'new-user',
	template: `
		<header><h2>{{heading}}</h2></header>
		<new-user-form clearFormOnInit clearAlertOnDestroy></new-user-form>
	`
})
export class NewUserComponent {

	heading = 'Create Account';

}
