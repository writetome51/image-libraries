import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '../clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	introduction = `This application lets you create libraries of images.  Inside each library you can 
	rename images, rearrange their order, add descriptions, tags, and do searches.`;

}
