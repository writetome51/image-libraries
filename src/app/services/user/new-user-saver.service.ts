import { Injectable } from '@angular/core';
import { NewUserValidatorService } from './new-user-validator.service';
import { UserCreatorService } from './user-creator.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserSaverService {

	constructor(
		private __userCreator: UserCreatorService,
		private __newUserValidator: NewUserValidatorService
	) {
	}


	async save() {
		if (this.__newUserValidator.isValid()) await this.__userCreator.create();
	}


}
