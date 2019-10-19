import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/user/current-user.service';
import { UserStorageService } from '../../services/user/user-storage.service';


@Component({
	selector: 'edit-user-email',
	templateUrl: './edit-user-email.component.html'
})
export class EditUserEmailComponent implements OnInit {


	constructor(
		public currentUser: CurrentUserService,
		private __userStorage: UserStorageService
	) {
	}


	ngOnInit(): void {
		this.currentUser.clearFormProperties();
	}


	save() {
		let result = this.__userStorage.updateEmail();
	}


}
