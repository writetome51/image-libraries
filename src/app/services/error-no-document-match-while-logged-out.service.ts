import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { UserStorageService } from './user/user-storage.service';


@Injectable({
	providedIn: 'root'
})
export class ErrorNoDocumentMatchWhileLoggedOutService {

	handler: () => Promise<void>;


	constructor(
		private __alert: AlertService,
		private __userStorage: UserStorageService
	) {
		this.handler = async () => {

			// Use this handler when any of these are possible:
			// the user does not exist in db, or the submitted password is wrong.

			if ((await this.__userStorage.exists()).success) {
				this.__alert.error = 'Incorrect password';
			}
			else this.__alert.error = 'User does not exist. Please create an account';
		};
	}
}
