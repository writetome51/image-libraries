import { Injectable } from '@angular/core';
import { UserStorageService } from './user/user-storage.service';
import { SessionIDLocalStorageService } from './authentication/session-id-local-storage.service';
import { ErrorNoDocumentMatchWhileAssumedLoggedInService }
	from './error-no-document-match-while-assumed-logged-in.service';
import { ErrorNoDocumentMatchWhileLoggedOutService }
	from './error-no-document-match-while-logged-out.service';


@Injectable({
	providedIn: 'root'
})
export class ErrorNoDocumentMatchService {

	handler: () => Promise<void>;


	constructor(
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __errorNoDocumentMatchWhileAssumedLoggedIn:
			ErrorNoDocumentMatchWhileAssumedLoggedInService,
		private __errorNoDocumentMatchWhileLoggedOut: ErrorNoDocumentMatchWhileLoggedOutService
	) {
		this.handler = async () => {
			if (this.__sessionIDLocalStorage.get().length) {
				await this.__errorNoDocumentMatchWhileAssumedLoggedIn.handler();
			}
			else await this.__errorNoDocumentMatchWhileLoggedOut.handler();
		};
	}


}
