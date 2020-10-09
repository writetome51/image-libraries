import { AppModuleRoutesData } from '../app-module-routes.data';
import { Component } from '@angular/core';
import { ClearFormOnInitAndAlertOnDestroyComponent }
	from '@abstract-components/clear-form-on-init-and-alert-on-destroy.component';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent extends ClearFormOnInitAndAlertOnDestroyComponent {

	hovered = false;

	explanation = `This application lets you save images to your account
	(either uploaded from your own device or found elsewhere on the web), then organize them in
	libraries.  Inside each library you can rearrange the image order, add
	descriptions, tags, pic locations, and do searches.`;

	moduleRoutes = AppModuleRoutesData;

}
