import { Component } from '@angular/core';
import { AlertService as alert } from '../services/alert.service';
import { ClearAlertAndFormOnInitComponent } from '../clear-alert-and-form-on-init.component';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent extends ClearAlertAndFormOnInitComponent {

	introduction = `This application lets you create libraries of images.  Inside each library you can 
	rename images, rearrange their order, add descriptions, tags, and do searches.`;

	alert = alert;

}
