import { Component } from '@angular/core';
import { AlertService as alert } from '../services/alert.service';
import { ClearAlertAndFormOnInitComponent } from '../clear-alert-and-form-on-init.component';


@Component({
	selector: 'new-user',
	templateUrl: './new-user.component.html'
})
export class NewUserComponent extends ClearAlertAndFormOnInitComponent {

	heading = 'Create Account';
	alert = alert;

}
