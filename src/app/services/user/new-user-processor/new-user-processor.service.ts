import { Injectable } from '@angular/core';
import { NewUserValidatorService } from './new-user-validator.service';
import { UserCreatorService } from './user-creator/user-creator.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserProcessorService {

	constructor(
		private __userCreator: UserCreatorService,
		private __newUserValidator: NewUserValidatorService
	) {
	}


	async process() {
		if (this.__newUserValidator.isValid()) await this.__userCreator.create();
	}


}