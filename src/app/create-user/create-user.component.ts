import { Component } from '@angular/core';
import { CurrentUserService } from '../services/current-user.service';
import { ErrorMessageService } from '../services/error-message.service';
import { NewUserSaverService } from '../services/new-user-saver.service';


@Component({
	selector: 'create-user',
	templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

	constructor(
		public currentUser: CurrentUserService,
		public error: ErrorMessageService,
		public newUserSaver: NewUserSaverService
	) {
		this.error.message = '';
	}


}
