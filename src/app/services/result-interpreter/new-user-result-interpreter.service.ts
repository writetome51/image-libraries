import { AlertService } from '../alert.service';
import { NewUserResultCheckService } from '../data-operation-result-check/new-user-result-check.service';
import { Injectable } from '@angular/core';
import { ResultInterpreterService } from './result-interpreter.service';
import { NewUserResultProcessorService } from '../user/new-user-result-processor.service';


@Injectable({
	providedIn: 'root'
})
export class NewUserResultInterpreterService extends ResultInterpreterService {

	constructor(
		private __alert: AlertService,
		__newUserResultCheck: NewUserResultCheckService,
		__newUserResultProcessor: NewUserResultProcessorService,
	) {
		super(__newUserResultCheck, __newUserResultProcessor);
	}

}
