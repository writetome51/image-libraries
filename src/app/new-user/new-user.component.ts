import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'new-user',
	templateUrl: './new-user.component.html'
})
export class NewUserComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	heading = 'Create Account';

}
