import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '@abstract-components/clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'new-user',
	template: `
		<header><h2>{{heading}}</h2></header>
		<new-user-form></new-user-form>
	`
})
export class NewUserComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	heading = 'Create Account';

}
