import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';


@Component({
	selector: 'edit-user',
	templateUrl: './edit-user.component.html'
})
export class EditUserComponent {


	constructor(public successOrErrorMessage: MessageService) {
	}


}
