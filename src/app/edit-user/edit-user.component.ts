import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';


@Component({
	selector: 'edit-user',
	templateUrl: './edit-user.component.html'
})
export class EditUserComponent {


	constructor(public alert: AlertService) {
	}


}
