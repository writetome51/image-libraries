import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { HandleNoRecordMatchErrorService } from './handle-no-record-match-error.service';
import { ErrorHandlerService } from './error-handler.service';


@Injectable({providedIn: 'root'})

export class NoRecordMatchErrorHandlerService extends ErrorHandlerService {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __handleNoRecordMatchError: HandleNoRecordMatchErrorService
	) {
		super();
	}


	async handle() {
		if (this.__localSessionID.get()) {
			await this.__handleNoRecordMatchError.go({assumeLoggedIn: true});
		}
		else await this.__handleNoRecordMatchError.go({assumeLoggedIn: false});
	}

}
