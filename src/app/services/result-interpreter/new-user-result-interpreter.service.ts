import { AlertService } from '../alert.service';
import { NewUserResultService } from '../data-operation-result/new-user-result.service';
import { Injectable } from '@angular/core';
import { ResultInterpreterService } from './result-interpreter.service';
import { NewUserResultProcessorService } from '../user/new-user-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultInterpreterService extends ResultInterpreterService {

	constructor(
		private __alert: AlertService,
		__newUserResult: NewUserResultService,
		__newUserResultProcessor: NewUserResultProcessorService,
	) {
		super(__newUserResult, __newUserResultProcessor);
	}

}
