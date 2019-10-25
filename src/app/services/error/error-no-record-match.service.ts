import { Injectable } from '@angular/core';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';
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
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __errorNoDocumentMatchWhileAssumedLoggedIn:
			ErrorNoRecordMatchWhileAssumedLoggedInService,
		private __errorNoDocumentMatchWhileLoggedOut: ErrorNoRecordMatchWhileLoggedOutService
	) {
		this.handler = async () => {
			if (this.__sessionIDLocalStorage.get().length) {
				await this.__errorNoDocumentMatchWhileAssumedLoggedIn.handler();
			}
			else await this.__errorNoDocumentMatchWhileLoggedOut.handler();
		};
	}


}
