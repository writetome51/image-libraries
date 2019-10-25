import { Injectable } from '@angular/core';
import { NewUserValidatorService } from './new-user-validator.service';
import { UserCreatorService } from './user-creator/user-creator.service';
import { Processor } from '../../../../interfaces/processor';


@Injectable({
	providedIn: 'root'
})
export class NewUserProcessorService implements Processor {

	constructor(
		private __userCreator: UserCreatorService,
		private __newUserValidator: NewUserValidatorService
	) {
	}


	async process() {
		if (this.__newUserValidator.isValid()) await this.__userCreator.create();
	}


}
