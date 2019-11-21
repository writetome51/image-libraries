import { Component } from '@angular/core';
import { ClearFormOnInitComponent } from '../clear-form-on-init.component';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent extends ClearFormOnInitComponent {

	introduction = `This application lets you create libraries of images.  Inside each library you can 
	rename images, rearrange their order, add descriptions, tags, and do searches.`;

}
