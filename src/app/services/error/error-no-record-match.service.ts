import { Injectable } from '@angular/core';
import { LocalSessionIDService } from '../authentication/local-session-id.service';
import { ErrorNoRecordMatchWhileAssumedLoggedInService }
	from './error-no-record-match-while-assumed-logged-in.service';
import { ErrorNoRecordMatchWhileLoggedOutService }
	from './error-no-record-match-while-logged-out.service';


@Injectable({
	providedIn: 'root'
})
export class ErrorNoRecordMatchService {

	handler: () => Promise<void>;


	constructor(
		private __localSessionID: LocalSessionIDService,
		private __errorNoRecordMatchWhileAssumedLoggedIn: ErrorNoRecordMatchWhileAssumedLoggedInService,
		private __errorNoRecordMatchWhileLoggedOut: ErrorNoRecordMatchWhileLoggedOutService
	) {
		this.handler = async () => {
			if (this.__localSessionID.get()) {
				await this.__errorNoRecordMatchWhileAssumedLoggedIn.handler();
			}
			else await this.__errorNoRecordMatchWhileLoggedOut.handler();
		};
	}


}
