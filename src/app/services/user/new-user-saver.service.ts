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


	async save() {
		if (this.__newUserValidator.isValid()) {
			let result = await this.__userStorage.create();
			this.__savedNewUserResult.interpret(result);
		}
	}


}
