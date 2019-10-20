import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { DataOperationBegunService } from '../../services/data-operation-begun.service';
import { PasswordUpdateProcessorService } from '../../services/password-update-processor.service';


@Component({
	selector: 'edit-user-password',
	templateUrl: './edit-user-password.component.html'
})
export class EditUserPasswordComponent implements OnInit {

	newPasswordAgain = '';


	constructor(
		public currentUser: CurrentUserService,
		private __dataOperationBegun: DataOperationBegunService,
		private __passwordUpdateProcessor: PasswordUpdateProcessorService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	async save() {
		this.__dataOperationBegun.waitingForResult = true;
		await this.__passwordUpdateProcessor.process();
		this.__dataOperationBegun.waitingForResult = false;
	}


}
