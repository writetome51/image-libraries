import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { LogoutService } from './logout.service';
import { Injectable } from '@angular/core';
import { LogoutResultInterpreterService } from './logout-result-interpreter.service';
import { HasError } from '@interfaces/has-error.interface';


@Injectable({providedIn: 'root'})
export class LogoutProcessorService extends DataTransportProcessorService {

	constructor(
		private __logout: LogoutService,
		__resultInterpreter: LogoutResultInterpreterService
	) {
		super(__resultInterpreter);
	}


	protected async _getResult(): Promise<{ success: true } | HasError> {
		return await this.__logout.go();
	}

}
