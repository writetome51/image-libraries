import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UserImageTotalInBrowserStorageService }
	from '@item-in-browser-storage/user-image-total-in-browser-storage.service';
import { GetUserImageTotalProcessorService }
	from 'get-image-total-processor/get-user-image-total-processor.service';


@Injectable({providedIn: 'root'})
export class AssureUserImagesTotalIsStoredLocallyService implements IDoThis {

	constructor(
		private __userImagesTotalInBrowser: UserImageTotalInBrowserStorageService,
		private __getUserImagesTotalProcessor: GetUserImageTotalProcessorService
	) {
	}


	async go() {
		if (this.__userImagesTotalIsStoredLocally()) return;

		else await executeFunctionRequiringWaiting.go(
			() => this.__getUserImagesTotalProcessor.process(), executionStatus
		);
	}


	private __userImagesTotalIsStoredLocally(): boolean {
		let total = this.__userImagesTotalInBrowser.get();
		return hasValue(total);
	}

}
