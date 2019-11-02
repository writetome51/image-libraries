import { AlertService } from '../../alert.service';
import { NewUserResultService } from './new-user-result.service';
import { DBUser } from '../../../../interfaces/db-user';
import { Injectable } from '@angular/core';
import { UserResultProcessorService } from '../user-result-processor.service';
import { ResultInterpreterService } from '../../result-interpreter.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultInterpreterService extends ResultInterpreterService {

	constructor(
		__newUserResult: NewUserResultService,
		__userResultProcessor: UserResultProcessorService,
		private __alert: AlertService,
	) {
		super(__newUserResult, __userResultProcessor);

		this._process = (result: DBUser) => {
			super._process(result);
			this.__alert.success = 'User created!';
		}
	}

}
