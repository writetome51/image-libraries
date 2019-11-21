import { Component } from '@angular/core';
import { AlertService as alert } from '../services/alert.service';
import { ClearFormOnInitComponent } from '../clear-form-on-init.component';


@Component({
	selector: 'new-user',
	templateUrl: './new-user.component.html'
})
export class NewUserComponent extends ClearFormOnInitComponent {

	heading = 'Create Account';
	alert = alert;

}
