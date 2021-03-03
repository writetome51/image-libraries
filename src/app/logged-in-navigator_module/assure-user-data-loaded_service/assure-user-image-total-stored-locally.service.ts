import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { UserImageTotalInBrowserStorageService }
	from '@browser-storage/user-image-total-in-browser-storage.service';
import { LoggedInNavigatorServicesModule } from '../logged-in-navigator-services.module';
import { ProcessGetUserImageTotalService }
	from '@process-get-image-total/process-get-user-image-total/process-get-user-image-total.service';


@Injectable({providedIn: LoggedInNavigatorServicesModule})
export class AssureUserImageTotalStoredLocallyService implements IDoThis {

	constructor(
		private __userImageTotalInBrowser: UserImageTotalInBrowserStorageService,
		private __processGetUserImageTotal: ProcessGetUserImageTotalService
	) {
	}


	async go() {
		if (this.__userImageTotalStoredLocally()) return;

		else await executeFunctionRequiringWaiting.go(
			() => this.__processGetUserImageTotal.go(), executionStatus
		);
	}


	private __userImageTotalStoredLocally(): boolean {
		let total = this.__userImageTotalInBrowser.get();
		return hasValue(total);
	}

}
