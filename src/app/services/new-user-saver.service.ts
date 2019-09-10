import { Injectable } from '@angular/core';
import { UserStorageService } from './user-storage.service';
import { NewUserValidatorService } from './new-user-validator.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserSaverService {

	constructor(
		private __userStorage: UserStorageService,
		private __newUserValidator: NewUserValidatorService
	) {
	}


	save(): void {
		if (this.__newUserValidator.isValid()) {
			this.__userStorage.create();
		}
	}
}
