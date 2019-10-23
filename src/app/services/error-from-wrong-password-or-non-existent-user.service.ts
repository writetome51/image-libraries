import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { UserStorageService } from './user/user-storage.service';


@Injectable({
	providedIn: 'root'
})
export class ErrorFromWrongPasswordOrNonExistentUserService {

	handler: (errorMessage) => Promise<void>;


	constructor(
		private __alert: AlertService,
		private __userStorage: UserStorageService
	) {
		this.handler = async (errMessage) => {
			if (errMessage.includes(
				'Operation not performed.  No document matched the request criteria'
				// This means either the user does not exist in db or the submitted password is wrong.
				// We find out below:
			)) {
				let result = await this.__userStorage.exists();

				if (result.success) this.__alert.error = 'Incorrect password';
				else this.__alert.error = 'User does not exist. Please create an account';
			}
		};
	}
}
