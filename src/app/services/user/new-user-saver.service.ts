import { Injectable } from '@angular/core';
import { UserStorageService } from './user-storage.service';
import { NewUserValidatorService } from './new-user-validator.service';
import { SavedNewUserResultService } from './saved-new-user-result.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserSaverService {

	constructor(
		private __userStorage: UserStorageService,
		private __newUserValidator: NewUserValidatorService,
		private __savedNewUserResult: SavedNewUserResultService
	) {
	}


	save(): void {
		if (this.__newUserValidator.isValid()) {
			let subscription = this.__userStorage.create().subscribe((result) => {

				this.__savedNewUserResult.interpret(result);
				subscription.unsubscribe();
			});
		}
	}


}
